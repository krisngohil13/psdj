import React from 'react'
import Header from './components/Header/header'
import Loader from './components/Loader/Loader'
import Router from './Router/Router'
import Footer from './components/Footer/footer'

const Layout = () => { 
  return (
    <div>
        <Loader />
        <Header/>
        <Router/>
        <Footer/>
    </div>
  )
}

export default Layout

