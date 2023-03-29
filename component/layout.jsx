import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
function Layout({children}) {
  return (
    <>
    <div>
      <Head>
        <title>Bitcoin Prices</title>
      </Head>
    </div>
    <Navbar/>
    <div>
        {children}
     </div>
        </>
  )
}

export default Layout
