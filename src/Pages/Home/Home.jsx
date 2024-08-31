import React, { useContext } from 'react'
import style from "./Home.module.css"
import { counterContext } from '../../Context/CounterContext/CounterContext'
import CategorySlider from '../../Components/CategorySlider/CategorySlider'
import MainSlider from '../../Components/MainSlider/MainSlider'
import Products from '../../Components/Products/Products'
import { Helmet } from 'react-helmet'

export default function Home() {
  const { counter, changeCounter } = useContext(counterContext)



  return (



    <div className='container'>

      <Helmet>

        <title>Home</title>

      </Helmet>
      <MainSlider />
      <CategorySlider />

      <Products />
    </div>
  )
}
