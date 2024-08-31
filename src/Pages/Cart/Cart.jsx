import React, { useContext, useEffect, useState } from 'react'
import style from "./Cart.module.css"
import { Helmet } from 'react-helmet'
import { cartContext } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom';

export default function Cart() {
  const [allData, setAllData] = useState({});
  const { getLoggedCart ,updateProdcut ,deleteSpecificItem,setNumberOfCartItems } = useContext(cartContext)

  async function getData() {

    let { data } = await getLoggedCart()
    
    setAllData(data.data);

  }
  async function updateCount(id, count) {
    let { data } = await updateProdcut(id, count);
    
    setAllData(data.data);

  }

  async function  deleteProduct(id) {
    let {data} = await deleteSpecificItem(id)
    setNumberOfCartItems(data.numOfCartItems)
    setAllData(data.data)
  }

  useEffect(() => {
    getData()
  }, [])



  return (

    <>

      <Helmet><title>Cart</title></Helmet>

      <div className='container'>

        <h2 className='text-green-400 text-2xl font-bold my-8'>Shopping Cart:</h2>
        <h4 className='font-bold text-center mb-4 text-red-500 text-xl'>Total Cart Price: {allData.totalCartPrice} EGP</h4>
       

       <div className='flex justify-end'>
        <Link 
        to={"/checkout"}
        className='bg-green-500 text-white  rounded p-2 mb-2 me-3'
        >
          Checkout
        </Link>
       </div>
       
       
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allData?.products?.map(product =>
                <tr
                key={product?.product?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">

                    <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product?.product?.title} />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product?.product?.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => { updateCount(product?.product?.id, product.count - 1) }}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        {product.count}
                      </div>
                      <button
                        onClick={() => { updateCount(product?.product?.id, product.count + 1) }}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.price} EGP
                  </td>
                  <td className="px-6 py-4">
                    <button

                  onClick={()=>{
                    deleteProduct(product?.product?.id)
                  }}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                       <i className='fa-solid fa-trash text-red-600 text-2xl'></i> </button>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>


      </div>
    </>

  )
}
