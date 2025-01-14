import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Section/Carousel'

function Homepage() {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <Carousel/>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage