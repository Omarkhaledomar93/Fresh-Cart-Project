import React, { useEffect, useState } from 'react';
import style from "./Products.module.css";
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Pagination from '../Pagination/Pagination';


export default function Products() {
  const [data, setData] = useState([]);

  function getProducts(pageNum=1) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNum}`)
      .then(data => setData(data.data)) 
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getProducts();
  }, []);

  function getData() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products")


  }


//  let {isLoading,data,isError} = useQuery('Products', getData)

 
function handlePageChange({selected}){
  
  getProducts(selected+1)

  

}
  return (
    <div className='row'>

      
      
      {data?.data?.length > 0 ? (




        data?.data?.map((product) => (
          
           <ProductItem product={product} />
          
        ))

      ) : (

        <Loader />
      )}


    <div className='flex w-full justify-center '>
    <Pagination
    handlePageChange = {handlePageChange}
     pageCount={data?.metadata?.numberOfPages}
    
    />
    </div>
    </div>
  );
}
