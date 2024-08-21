import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const UserMasterLayout = ({child}) => {
  return (
    <>
    <Header />
    {child}
    <Footer />
    </>
  )
}

export default UserMasterLayout