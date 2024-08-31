import React, { useContext } from 'react'

import style from "./Login.module.css"
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext/UserContext';
import { Helmet } from 'react-helmet';

export default function Login() {

  let validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().matches(/^[0-9a-z]{3,9}$/, 'Password Does not match'),

  })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { setUserToken } = useContext(userContext)

  let navigate = useNavigate()

  function handleLogin(values) {
    setIsLoading(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then((data) => {
        if (data.data.message === "success") {
          setUserToken(data.data.token)
          localStorage.setItem('userToken', data.data.token)
          setIsLoading(false)
          navigate("/")

        }
      })
      .catch((error) => {
        isLoading(false)
        setError(error.response.data.message)

      })


  }



  const formik = useFormik({

    initialValues: {
      email: "",
      password: "",




    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,

  })








  return (


    <div className='container '>



      <Helmet>

        <title>Login</title>

      </Helmet>
      <div className='w-3/4 mx-auto mt-5'>
        <h1 className='text-green-500 font-bold text-3xl'>Login:</h1>


        <form className='my-3' onSubmit={formik.handleSubmit}>



          {error && <div className='bg-red-200 py-2'>{error}</div>}

          <div className="relative my-5">
            <input
              type="email"
              id="email"
              className="w-full block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"

              name='email'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}

            />

            <label
              htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Email</label>

            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}





          </div>

          <div className="relative my-5">
            <input
              type="password"
              id="password"
              className="w-full block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"

              name='password'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}

            />

            <label
              htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Password</label>


            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}




          </div>
          {" "}
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            {isLoading ? 'Loading..' : 'Submit'}

          </button>
          <span>
            <Link
              to='/forgot'
              className=" text-base text-blue-600 hover:underline hover:text-blue-700 transition duration-200">
              Forgot Password ?
            </Link>
          </span>
        </form>

      </div>
    </div>
  )
}
