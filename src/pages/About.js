import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import data from "../pages/Data"
import { Link } from 'react-router-dom';
import "../styles/about.css"
import resume from "../components/resume.pdf"
import dp from "../assets/samson.png"

export const About = () => {
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Popsicool | About</title>
        </Helmet>
      </HelmetProvider>
    <div className='secTitle'>
      <h2>About Me</h2>
    </div>
    <div className='do'>
        <div className='row'>
          <div className='describe'>
            <h3>Who am i?</h3>
            <div className='sPo'>
                <div className='sPi'></div>
            </div>
              <div className='row mt-4'>
                <div className='col-md-6'>
                  <div className='details'>
                    <p>
                      I am Samson Akinola, a Software engineer from Nigeria. A graduate of ALX africa Software engineering program with a specialization in backend development.
                        A graduate of the Federal University of Agriculture Abeokuta, Nigeria with a bachelor's degree in Animal Science.
                    </p>
                    <p>I do Backend, Frontend and Devops engineering</p>
                    <p>
                      <a
                        href={resume}
                        download="samson_akinola"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className='btn1'>My resume</button>
                      </a>
                      <Link to="/projects"><button className='btn2'>Portfolio</button></Link>
                    </p>
                  </div>
                  </div>
                  <div className='col-md-6 about-image'>
                    <img src={dp} alt="dp" style={{width:"70%"}}/>
                  </div>

              </div>

        </div>

        </div>

      <div className="row mt-5 text-white pb-3">
    <h3 className="">Trainings and Certifications</h3>
    <div style={{width:"40%"}}>
      <div className='sPo2'>
          <div className='sPi'></div>
      </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-3 text-center">
            <img src="https://lh5.googleusercontent.com/-TF8-egMVOrGwa2GBzEaxdupYly4v_s9_pyKvSJKX1u6cbKoJ_bEsreO8iRCmqZSbB4=w2400" alt="seal" />
        </div>
        <div className="col-md-7">
            <table className="table align-middle mb-0 .table-borderless">
      <thead className="bg-light">
        <tr>
            <th></th>
          <th>Title</th>
          <th>Organization</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((each) => (
          <tr className="text-success" key={each.title}>
              <td className='td'><i className="fa fa-certificate" aria-hidden="true"></i></td>
              <td>{each.title}</td>
              <td>{each.organization}</td>
              <td>{each.date}</td>
          </tr>
        ))}
      </tbody>
      </table>

        </div>

    </div>

    </div>


    </div>
    </>
  )
}
