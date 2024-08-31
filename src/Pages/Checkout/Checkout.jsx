import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext/CartContext';

export default function Checkout() {

  let validationSchema = Yup.object({
    details: Yup.string().required('Details is Required'),
    city: Yup.string().required('City is Required'),
    phone: Yup.string()
      .required()
      .matches(/^01[0-25][0-9]{8}$/, 'Phone number does not match')

  })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { onlinePayment } = useContext(cartContext)


  let navigate = useNavigate()

   async function handlePayment(values) {
   const {data}= await onlinePayment(null , values)
  //  console.log(data.session.url);
   window.location.href=data.session.url
   
    

    setIsLoading(true)
      // axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      // .then((data)=>{
      //   if (data.data.message==="success") {

      // setIsLoading(false)
      //     navigate('/login')

      //   }
      // })
      .catch((error) => {
        setError(error.response.data.message)
        isLoading(true)
      })


  }


  const formik = useFormik({
    initialValues: {
      details: "",
      city: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handlePayment,
  });








  return (


    <div className='container '>


      <Helmet>

        <title>Checkout</title>

      </Helmet>
      <div className='w-3/4 mx-auto mt-5'>
        <h1 className='text-green-500 font-bold text-3xl' >Checkout:</h1>


        <form className='my-3' onSubmit={formik.handleSubmit}>



          {error && <div className='bg-red-200 py-2'>{error}</div>}
          <div className="relative my-5">
            <input
              type="text"
              id="details"
              className="w-full block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"

              name='details'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}

            />

            <label
              htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Address Details:</label>

            {formik.touched.details && formik.errors.details ? (
              <div className="text-red-500 text-sm">{formik.errors.details}</div>
            ) : null}





          </div>

          <div className="relative my-5">
            <input
              type="text"
              id="city"
              className="w-full block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"

              name='city'
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}

            />

            <label
              htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              City</label>

            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500 text-sm">{formik.errors.city}</div>
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
            {isLoading ? 'Loading..' : 'Submit'}
          </button>


        </form>

      </div>
    </div>
  )
}
