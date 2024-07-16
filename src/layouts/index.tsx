import React from 'react'
import Header from './Navbar/Navbar'

interface IProps {
  children?: React.ReactNode
}

function MainLayout ({children}:IProps) {  
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default MainLayout