import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get('https://ecommerce.routemisr.com/api/v1/categories')
            .then((data) => setCategories(data.data.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {categories.length > 0 ? (
                categories.map((category) => (
                    <div 
                        key={category._id} 
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center mb-6"
                    >
                        <img 
                            src={category.image} 
                            alt={category.name} 
                            className="h-40 w-full object-cover rounded-md" 
                        />
                        <p className="mt-2 text-green-500 text-center">{category.name}</p>
                    </div>
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
}
