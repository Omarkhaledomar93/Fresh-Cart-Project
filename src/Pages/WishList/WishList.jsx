


import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { wishListContext } from '../../Components/WishListContext/WishListContext';
import { Link } from 'react-router-dom';

export default function WishList() {
  const [allData, setAllData] = useState([]);
  const { getLoggedWishList, deleteSpecificWishListItem, setNumberOfWishListItems } = useContext(wishListContext);

  async function getData() {
    try {
      let { data } = await getLoggedWishList();
      
      if (data && data.data) {
        setAllData(data.data); 
      } else {
        console.log("Data structure is not as expected.");
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      let { data } = await deleteSpecificWishListItem(id);
      setNumberOfWishListItems(data.numOfWishListItems);
      getData(); 
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className='container'>
        <h2 className='text-green-400 text-2xl font-bold my-8'>
          Wishlist:
          <i className='fa-solid fa-heart text-green-500 ps-1'></i>
        </h2>

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
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allData.map((product, index) => (
                <tr
                  key={product._id } 
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={product.imageCover } 
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt={product.title}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.title }
                  </td>
                 
                  <td className="px-2  py-2 font-semibold text-gray-900 dark:text-white">
                    {product.price} EGP
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      <i className='fa-solid fa-trash text-red-600 text-2xl'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
