import React from 'react'
import { Sections } from '../components/Sections'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import img1 from "../assets/icons/icon1.png"
import img2 from "../assets/icons/icon2.png"
import img3 from "../assets/icons/icon3.png"
export const Devops = () => {
  const content = {
    title: "DevOps",
    do: [
      {
        title:"Git and Github",
        text: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
        img: img1
      },
      {
        title:"Ansible",
        text: "Ansible is a suite of software tools that enables infrastructure as code. It is open-source and the suite includes software provisioning, configuration management, and application deployment functionality.",
        img: img2
      },
      {
        title:"Docker",
        text: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
        img: img3
      },
      {
        title:"Kubernetes",
        text: "Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management.",
        img: img2
      },
      {
        title:"AWS",
        text: "AWS (Amazon Web Services) is a comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS) and packaged-software-as-a-service (SaaS) offerings. AWS services can offer an organization tools such as compute power, database storage and content delivery services.",
        img: img3
      },
    ],
    skills:[
      {
        title: "AWS",
        level: "50%"
      },
      {
        title: "Docker",
        level: "70%"
      },
      {
        title: "Kubernates",
        level: "60%"
      },
      {
        title: "Ansible",
        level: "80%"
      },
      {
        title: "Github Action",
        level: "75%"
      },
      {
        title: "Bash Scripting",
        level: "75%"
      },
    ]
  }
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Popsicool | DevOps</title>
        </Helmet>
      </HelmetProvider>
       <Sections details={content}/>
    </>
  )
}
