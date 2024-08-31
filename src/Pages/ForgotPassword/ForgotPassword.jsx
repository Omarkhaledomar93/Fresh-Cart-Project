import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  function forgotPassword(values) {
    setIsLoading(true);
    axios
      .post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values)
      .then((response) => {
      
        if (response.data.statusMsg === 'success') {
        
          setIsLoading(false);
          navigate('/verify');
        } else {
          setIsLoading(false);
          setError('Something went wrong, please try again.');
        }
      })
      .catch((error) => {
        setIsLoading(false);
       error
      });
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: forgotPassword,
  });

  return (
    <div className='container'>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className='w-3/4 mx-auto mt-5'>
        <h1 className='text-green-500 font-bold text-3xl'>Forgot Password:</h1>

        <form className='my-3' onSubmit={formik.handleSubmit}>
          {error && <div className='bg-red-200 py-2'>{error}</div>}

          <div className="relative my-5">
            <input
              type="email"
              id="email"
              className="w-full block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              name='email'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>

            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
