import React from 'react'
import About from '../components/About'
import CardsRow from '../components/CardsRow'
import Layout from '../components/Layout'
import Shots from '../components/Shots'
import Review from '../components/Review'
import Info from '../components/Info'
import products from './dummyData'
const Home = () => {
 
  return (
    <div>
        <Layout/>
        <CardsRow title="Products" products={products.slice(0,2)}/>
        <About/>
        <Review/>
        <Info />
        <Shots/>
    </div>
  )
}

export default Home