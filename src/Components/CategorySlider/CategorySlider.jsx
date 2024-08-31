import React, { useEffect, useState } from 'react'
import style from "./CategorySlider.module.css"
import axios from 'axios'
import Slider from 'react-slick';

export default function CategorySlider() {
  

const [categories, setCategories] = useState([])



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 1000,
};
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2,
      initialSlide: 2
    
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]


  function getCategories(){
 axios.get("https://ecommerce.routemisr.com/api/v1/categories")
.then((data)=>setCategories(data.data.data  ))
.catch((error)=> console.log(error));


  }
  
  useEffect(() => {
    getCategories()
  }, [])
  
  
  
  return (



   <div className=' my-5 py-4 overflow-hidden'>

    <h2 className='text-2xl font-bold text-green-500 pb-3'>Shop Popular Categories </h2>

<Slider {...settings}>
      
      {categories.map((category)=>
    
    <div className='h-[200px] cursor-pointer 'key={category._id}>
       <img src={category.image} className='h-full' alt="" />
       <h3>{category.name }</h3>


      </div>
    
    )}
      
      
    </Slider>
  
   </div>
  )
}
