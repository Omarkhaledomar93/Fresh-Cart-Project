import React, { useContext } from 'react'

import style from "./NavBar.module.css"
import logo from './../../assets/freshcart-logo.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { counterContext } from '../../Context/CounterContext/CounterContext';
import { userContext } from '../../Context/UserContext/UserContext';
import { cartContext } from '../../Context/CartContext/CartContext';


export default function NavBar() {



  let navigate = useNavigate()

  const { userToken, setUserToken } = useContext(userContext)
  const {numberOfCartItems} = useContext(cartContext)

  function logout() {

    localStorage.removeItem("userToken")
    setUserToken(null)
    navigate("/login")




  }


  return (


    <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={'/'}
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />

        </Link>


        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path strokeWidth="currentColor" strokewidth-linecap="round" strokewidth-linejoin="round" strokewidth-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium  flex flex-col p-3 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <ul className="font-medium  flex flex-col p-3 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              {userToken && <>


                 <li>
                  <Link
                    to='/' 
                    className="text-bold block py-2 px-3 text-green-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='categories' 
                    className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Categories
                  </Link>
                </li>

                <li>
                  <Link
                    to='brands' 
                    className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Brands
                  </Link>
                </li>

                <li>
                  <Link
                    to='wish' 
                    className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Wishlist

                    <i className='fa-solid fa-heart text-green-500 ps-2'></i>
                  </Link>
                </li>

                <li className=' flex  '>
                <Link
                    to='cart'
                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Cart
                  </Link>
                 <span className=' relative '>
                  <i className='fa-solid fa-shopping-cart mx-2 inline text-green-500 text-2xl'>
                  </i>
                    <span className=' absolute text-black -top-3 right-4 text-center'>
                           {numberOfCartItems}
                    </span>
                  
                 </span>
                </li>

              </>}

            </ul>



            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                <i className='fa-brands fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className='fa-brands fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className='fa-brands fa-tiktok'></i>
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-red-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className='fa-brands fa-youtube'></i>
              </a>
            </li>
            {userToken ? (
              <>
                <li>
                  <button onClick={logout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Logout
                  </button>
                </li>
              </>
            ) :

              (

                <>
                  <li>
                    <Link
                      to='register' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Register
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='Login' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Login
                    </Link>
                  </li>
                </>

              )}
          </ul>
        </div>
      </div>
    </nav >

  )
}
