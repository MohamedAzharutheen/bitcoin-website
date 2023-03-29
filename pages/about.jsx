import React from 'react'
import Navbar from '../component/navbar'
function Home() {
  return (
    <>
    <Navbar/>
    <div>
      <h1 className='font-bold text-3xl text-center'>About Bitcoin Price</h1>
      <p className='text-gray-200 font-semibold text-center'>Application to view bitcoin prices</p>
    </div>
    </>
  )
}

export default Home
