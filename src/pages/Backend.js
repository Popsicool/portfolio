import React from 'react'
import { Sections } from '../components/Sections'
import img1 from "../assets/icons/icon1.png"
import img2 from "../assets/icons/icon2.png"
import img3 from "../assets/icons/icon3.png"
import { Helmet, HelmetProvider } from 'react-helmet-async';
export const Backend = () => {
  const content = {
    title: "Back-end",
    do: [
      {
        title:"Django",
        text: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.",
        img: img1
      },
      {
        title:"Node Js",
        text: "Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Developed in 2009 by Ryan Dahl. It is used to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.",
        img: img2
      },
      {
        title:"Flask",
        text: "Flask is a web framework, it’s a Python module that lets you develop web applications easily. It’s has a small and easy-to-extend core: it’s a microframework that doesn’t include an ORM (Object Relational Manager) or such features.",
        img: img3
      }
    ],
    skills:[
      {
        title: "Django",
        level: "80%"
      },
      {
        title: "Node JS",
        level: "65%"
      },
      {
        title: "Flask",
        level: "70%"
      },
      {
        title: "MySQL",
        level: "75%"
      },
      {
        title: "MongoDB",
        level: "60%"
      },
    ]
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Popsicool | Backend</title>
        </Helmet>
      </HelmetProvider>
       <Sections details={content}/>
    </>
  )
}
