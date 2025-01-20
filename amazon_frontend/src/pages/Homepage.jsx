import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Section/Carousel'
import Header from '../components/Header/Header'
import CartOfData from '../components/Section/CartOfData'
import ProductCard from '../components/Section/ProductCart'




function Homepage() {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <Header />
                <Carousel />
               <CartOfData/>
               <ProductCard/>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage