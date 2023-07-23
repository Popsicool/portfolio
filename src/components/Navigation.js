import React, { useState } from 'react'
import "../styles/header.css"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
  return (
    <nav>
        <p onClick={() => setOpen(false)}><NavLink to='/'>Popsicool</NavLink></p>
        <div className={open? "navBars2" : 'navBars'}>
            <div className='hambuger'>
                {open ? <span onClick={toggle}><i className="fa fa-solid fa-window-close"
                ></i></span>  : <span onClick={toggle}><i className="fa fa-solid fa-bars"></i></span>}
            </div>
            <ul>
                <NavLink to='/projects'>
                    <li>
                        Projects
                    </li>
                </NavLink>
                <NavLink to='/backend'>
                    <li>
                        Backend
                    </li>
                </NavLink>
                <NavLink to='/devops'>
                    <li>
                        DevOps
                    </li>
                </NavLink>
                <NavLink to='/frontend'>
                    <li>
                        Frontend
                    </li>

                </NavLink>
                <NavLink to='/contact'>
                    <li>
                        Contact
                    </li>

                </NavLink>
            </ul>
        </div>
    </nav>
  )
}
