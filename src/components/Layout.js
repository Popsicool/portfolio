import React from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <>
    <div className='container'>
        <Navigation/>
        <div>{ children }</div>
        </div>
        <Footer/>
    </>
  )
}
