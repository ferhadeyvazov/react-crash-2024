import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Navbar/Navbar'

interface IProps {
  children?: React.ReactNode
}

function MainLayout ({children}:IProps) {  
  return (
    <>
    <Header />
    {children}
    <ToastContainer />
    </>
  )
}

export default MainLayout