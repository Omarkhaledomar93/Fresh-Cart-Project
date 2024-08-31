import React from 'react'

export default function VerifyCode() {
  return (

  
    
  
  <>

<div className="container">


  <div className='w-3/4 mx-auto mt-5'>
  <div className="relative my-5">

  <h1 className='text-green-500 font-bold text-3xl pb-7'>Verify code:</h1>

            <input
              type="text"
              id="text"
              className="w-full block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              name='Code'
              placeholder=" "
            
            />
            <label
              htmlFor="text"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Code
            </label>

          </div>

          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
             Submit
          </button>
  
  </div>

</div>
  </>
  )
}
