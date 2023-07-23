import React from 'react'
import "../styles/footer.css"

export const Footer = () => {
  return (
      <footer className='footer'>
        <div>
          <ul className='footer-icon'>
            <a
            href="https://twitter.com/Samson_Akinola1" target="_blank" className="rectangle"
                        rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
            </a>
            <a
            href="https://www.linkedin.com/in/popsicool" target="_blank" className="rectangle"
                        rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
            </a>
            <a
            href="https://www.github.com/Popsicool" target="_blank" className="rectangle"
                        rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
            </a>
            <a
            href="mailto:akinolasamson1234@gmail.com" target="_blank" className="rectangle"
                        rel="noopener noreferrer">
                        <i className="fa fa-envelope"></i>
            </a>
            <a
            href="https://wa.me/+2348069482021" target="_blank" className="rectangle"
                        rel="noopener noreferrer">
                        <i className="fa fa-whatsapp"></i>
            </a>

          </ul>
        </div>
          <p className='footerRight'>
            &copy; {new Date().getFullYear()} Samson Oluwasegun Akinola. All rights reserved
          </p>
      </footer>
  )
}
