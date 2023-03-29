import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div> 
       <div className='bg-blue-700 text-white p-3'>
       <nav className='flex sm:flex justify-between  '>
        <a className='' href='/'>Bitcoin Prices</a>
          <p className='hover:text-blue-300 '> <Link className='' href={"/"}>Home</Link></p> 
          <p> <Link href={"/about"}>About</Link></p> 
    
        </nav> 
        </div>
    </div>
  )
}

export default Navbar
