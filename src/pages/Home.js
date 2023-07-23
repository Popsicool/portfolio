import React from 'react'
import pop from "../assets/pop.jpg"
import "../styles/home.css"
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
export const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Popsicool | Home page</title>
        </Helmet>
      </HelmetProvider>
        <div className='row hero' >
            <div className='col-sm-5 dp'>
                <img src={pop} alt="pop" />
            </div>
            <div className='col-sm-6'>
              <div className='hero-body'>
                  <p className='title'>Software || DevOps Engineer</p>
                  <h3 className='name'>Samson O. Akinola</h3>
                  <p className='context'>In a technologically driven world of ours, where technological solutions are required for ever evolving problems, I
                    look forward to using my technological skills to collaborate with other like minds in providing innovative solutions
                    to problems. I accept challenges with a mind-set to help provide solution, learn from the experiences and improve
                    my skillset
                  </p>
                  <p>
                 <Link to="/projects"><button className='btn1'>Portfolio</button></Link><Link to="/contact"><button className='btn2'>Contact me</button></Link>
                  </p>
              </div>
            </div>
        </div>
    </div>
  )
}
