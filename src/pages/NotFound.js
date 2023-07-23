import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';


import "../styles/error.css"
export const NotFound = () => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
            <title>Popsicool | 404 NOT FOUND</title>
            </Helmet>
        </HelmetProvider>
        <div className='notFound'>
            <h4 className='oops'>Oops!</h4>

            <p className='pnf'>404 - PAGE NOT FOUND</p>
            <p className='errorText'>The page you are looking for might have been removed, had its  name changed, or is temporarily unavilable</p>
            <Link to="/"><button className='btn1 btn4' >GO TO HOMEPAGE</button></Link>

        </div>
    </>
  )
}
