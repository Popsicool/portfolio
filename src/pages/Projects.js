import React, { useState, useEffect } from 'react'
import "../styles/projects.css"
import { ProjectSlide } from '../components/ProjectSlide'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { toast } from 'react-toastify';


export const Projects = () => {
    const [backend, setBackend] = useState([])
    const [frontend, setFrontend] = useState([])
    const [devops, setDevops] = useState([])
    const [all, setAll] = useState([])
    const [list, setList] = useState(all)
    const [slide, setSlide] = useState(1)
    const [select, setSelect] = useState(null)
    const [category, setCategory] = useState("")
    const [showDetails, setShowDetails] = useState(false)
    const [isloading, setIsloading] = useState(true)
    const handleClick = (props) => {
        setCategory(props.category)
        setSelect(props.selected)
        setShowDetails(true)
    }
    useEffect(() => {
        setIsloading(true)
        const url = "https://api.fog-agric.com/";
        setIsloading(true)
        fetch(url)
        .then((res) => {
            if (!res.ok){
                throw Error(res)
            }
            return res.json()
        })
        .then((data) => {
            setAll([...data.backend, ...data.frontend, ...data.devops])
            setList([...data.backend, ...data.frontend, ...data.devops])
            setBackend(data.backend)
            setFrontend(data.frontend)
            setDevops(data.devops)
            setIsloading(false)
        })
        .catch(error => {
            toast.error("Please try again latter", {
            position:"top-right"})
            setIsloading(false)
        })
    }, []);

  return (
    <div>
        <HelmetProvider>
        <Helmet>
          <title>Popsicool | Projects</title>
        </Helmet>
      </HelmetProvider>
        <div className='secTitle'>
            {showDetails ? <h2><span style={{cursor:"pointer"}} onClick={() => {setCategory(""); setSelect(null);setShowDetails(false)}}>Projects</span>/{category}</h2> : <h2>Projects</h2>}
        </div>
        <div className='do'>
            {showDetails ?
            <>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={select.img} alt='project img' style={{width:"100%"}}/>
                    </div>
                    <div className='col-sm-7 m-2'>
                        <p><span className='dtT'>Title:  </span>{select.title}</p>
                        <p><span className='dtT'>Url:  </span><a className='lnk' href = {select.url} target='_blank' rel="noreferrer">{select.url}</a></p>
                        <p><span className='dtT'>Github:  </span><a className='lnk' href = {select.github} target='_blank' rel="noreferrer">{select.github}</a></p>
                        <p><span className='dtT'>Technologies:  </span>{select.technologies}</p>
                        <p><span className='dtT'>Category:  </span>{select.type}</p>
                        <p><span className='dtT'>Description:  </span>{select.description}</p>

                    </div>

                </div>
            </>:
            <>
                <div>
                    <h3>My Works</h3>
                    <div className='sPo'>
                        <div className='sPi'></div>
                    </div>
                </div>
            <div className='pjs'>
                <ul>
                    <div>
                        <li className='swipe' onClick={() => {setList(all); setSlide(1)}} >All</li>
                        {slide === 1 &&
                            <div className='sPo2'>
                                <div className='sPi'></div>
                            </div>
                        }
                    </div>
                    <div>
                        <li className='swipe' onClick={() => {setList(backend); setSlide(2)}} >Backend</li>
                        {slide === 2 &&
                            <div className='sPo2'>
                                <div className='sPi'></div>
                            </div>
                        }
                    </div>
                    <div>
                        <li className='swipe' onClick={() => {setList(frontend); setSlide(3)}} >Frontend</li>
                        {slide === 3 &&
                            <div className='sPo2'>
                                <div className='sPi'></div>
                            </div>
                        }
                    </div>
                    <div>
                        <li className='swipe' onClick={() => {setList(devops); setSlide(4)}} >DevOps</li>
                        {slide === 4 &&
                            <div className='sPo2'>
                                <div className='sPi'></div>
                            </div>
                        }
                    </div>
                </ul>
            </div>
            {isloading ?
            <div id="res" className="text-center">
                <div className="spinner-border text-center text-md-left" role="status" id="spinner-div">
                    <button className="sr-only btn btn-primary btn-lg mt-5 text-center">Loading...</button>
                    </div>
            </div>

            :
            <ProjectSlide list = {list} handleClick= {handleClick}/>
            }
            </>

            }
        </div>

    </div>
  )
}
