import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  function getBrands() {
    return axios
      .get('https://ecommerce.routemisr.com/api/v1/brands')
      .then((response) => setBrands(response.data.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {brands.length > 0 ? (
        brands.map((brand) => (
          <div
            key={brand._id}
            className="w-full  md:w-1/3 lg:w-1/4 xl:w-1/5 border p-2
             cursor-pointer rounded-md
              shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
