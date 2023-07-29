import React, { useState } from 'react'
import "../styles/header.css"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    const [open, setOpen] = useState(false)
    const [skill, showSkill] = useState(false)
    const toggle = () => {
        showSkill(false)
        setOpen(!open)
    }
    const toggleSkill = () => {
        showSkill(!skill)
    }
    const closeShow = () => {
        showSkill(false)
    }
  return (
    <nav>
        <p onClick={() => {
            setOpen(false)
            showSkill(false)
        }}><NavLink to='/'>Popsicool</NavLink></p>
        <div className={open? "navBars2" : 'navBars'}>
            <div className='hambuger'>
                {open ? <span onClick={toggle}><i className="fa fa-solid fa-window-close"
                ></i></span>  : <span onClick={toggle}><i className="fa fa-solid fa-bars"></i></span>}
            </div>
            <ul>
                <NavLink to='/about'>
                    <li onClick={() => {
                        closeShow()
                        setOpen(false);
                        }}>
                        About me
                    </li>
                </NavLink>
                <NavLink to='/projects'>
                    <li onClick={() => {
                        closeShow()
                        setOpen(false);
                        }}>
                        Projects
                    </li>
                </NavLink>
                <div className={skill ? 'dropdown' : undefined}>
                    <li className='skill' onClick={toggleSkill}>Skills {skill ? <i className='fa fa-angle-up'></i> : <i className='fa fa-angle-down'></i> } </li>
                    {skill &&
                    <div className='dropdown-content'>
                        <NavLink to='/backend'>
                            <li className='skt' onClick={() => {
                        closeShow()
                        setOpen(false);
                        }}>
                                Backend
                            </li>
                        </NavLink>
                        <NavLink to='/devops' onClick={() => {
                        closeShow()
                        setOpen(false);
                        }}>
                            <li className='skt'>
                                DevOps
                            </li>
                        </NavLink>
                        <NavLink to='/frontend' onClick={() => {
                        closeShow()
                        setOpen(false);
                        }}>
                            <li className='skt'>
                                Frontend
                            </li>

                        </NavLink>
                    </div>
                    }

                </div>
                <NavLink to='/blog'>
                    <li onClick={() => {
                        closeShow()
                        setOpen(false);
                        }}>
                        Blog
                    </li>

                </NavLink>
                <NavLink to='/contact'>
                    <li onClick={() => {
                        closeShow()
                        setOpen(false);
                        }}>
                        Contact
                    </li>

                </NavLink>
            </ul>
        </div>
    </nav>
  )
}
