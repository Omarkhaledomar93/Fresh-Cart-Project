import React from 'react'
import style from "./Register.module.css"
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Register() {

  let validationSchema= Yup.object({
    name:Yup.string().required('Name is Required').min(3),
    email:Yup.string().required().email(),
    password:Yup.string().required().matches(/^[0-9a-z]{3,9}$/, 'Password Does not match'),
    rePassword:Yup.string()
    .required()
    .oneOf([Yup.ref("password")], 'repassword does not match password'),
    phone:Yup.string()
    .required()
    .matches(/^01[0-25][0-9]{8}$/, 'Phone number does not match' )

  })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  let navigate= useNavigate()

  function handleRegister(values) {
setIsLoading(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    .then((data)=>{
      if (data.data.message==="success") {
        
    setIsLoading(false)
        navigate('/login')
        
      }
    })
    .catch((error)=>{
      setError(error.response.data.message)
  isLoading(true)
  })

   
  }



  const formik = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",



    },
    validationSchema:validationSchema,
    onSubmit: handleRegister,

  })
  console.log(formik)







  return (


    <div className='container '>

      
<Helmet>

<title>Register</title>

</Helmet>
      <div className='w-3/4 mx-auto mt-5'>
        <h1 className='text-green-500 font-bold text-3xl' >Register:</h1>


        <form className='my-3' onSubmit={formik.handleSubmit}>


          
          {error&&<div className='bg-red-200 py-2'>{error}</div> }
          <div className="relative my-5">
            <input
              type="text"
              id="name"
              className="w-full block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"

              name='name'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}

            />

            <label
              htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Name:</label>

              {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}





          </div>

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

          <div className="relative my-5">
            <input
              type="password"
              id="rePassword"
              className="w-full block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"

              name='rePassword'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}

            />

            <label
              htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              RePassword </label>


              {formik.touched.rePassword && formik.errors.rePassword ? (
              <div className="text-red-500 text-sm">{formik.errors.rePassword}</div>
            ) : null}




          </div>

          <div className="relative my-5">
            <input
              type="tele"
              id="phone"
              className="w-full block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"

              name='phone'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}

            />

            <label
              htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Phone </label>




              {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}


          </div>
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            {isLoading?'Loading..':'Submit'}
          </button>


        </form>

      </div>
    </div>
  )
}
