import React from 'react'
import { Sections } from '../components/Sections'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import img1 from "../assets/icons/icon1.png"
import img2 from "../assets/icons/icon2.png"
import img3 from "../assets/icons/icon3.png"
export const Frontend = () => {
  const content = {
    title: "Frontend",
    do: [
      {
        title:"HTML",
        text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.",
        img: img1
      },
      {
        title:"CSS",
        text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        img: img2
      },
      {
        title:"JAVASCRIPT",
        text: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more",
        img: img3
      },
      {
        title:"REACT JS",
        text: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
        img: img2
      },

    ],
    skills:[
      {
        title: "HTML",
        level: "90%"
      },
      {
        title: "CSS",
        level: "70%"
      },
      {
        title: "JAVASCRIPT",
        level: "80%"
      },
      {
        title: "REACT JS",
        level: "85%"
      },
      {
        title: "BOOSTRAP CSS",
        level: "75%"
      },
    ]
  }
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Popsicool | Frontend</title>
        </Helmet>
      </HelmetProvider>
       <Sections details={content}/>
    </>
  )
}
