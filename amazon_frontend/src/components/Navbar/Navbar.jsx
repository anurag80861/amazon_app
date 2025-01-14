import React from 'react'
import RightNavbar from './RightNavbar'
import SearchBar from './SearchBar'
import LeftNavbar from './LeftNavbar'


function Navbar() {
  return (
    <div className='flex bg-black w-full'>
        <LeftNavbar/>
        <SearchBar/>
        <RightNavbar/>
    </div>
  )
}

export default Navbar