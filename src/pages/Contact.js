import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "../styles/contact.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const send = (e) => {
        e.preventDefault()
        if (!name || !message || !email) return
        setLoading(true)

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("message", message);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        };

        fetch("https://api.fog-agric.com/contact", requestOptions)
        .then(response => {
            if (!response.ok){
                throw Error(response)
            }
            return response.json()
        })
        .then(result => {
            toast.success("Message sent!", {
            position:"top-right"})
            setName("")
            setEmail("")
            setMessage("")
            setLoading(false)
        })
        .catch(error => {
            toast.error("Please try again latter", {
            position:"top-right"})
            setLoading(false)
        }
        );
    }
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Popsicool | Contact me</title>
        </Helmet>
      </HelmetProvider>
    <div className='secTitle'>
      <h2>Contact</h2>
    </div>
    <div className='row'>
        <div className='do'>
            <div><iframe title="location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15825.954437703762!2d3.8146535999999998!3d7.411048200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1689954050789!5m2!1sen!2sng" className='map' width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            <div className='row contact-body'>
                <div className='col-md-4 contactLeft'>
                    <div className='sec'>
                        <div>
                            <h4 className='doTitle p2'> <i className=" fa fa-solid fa-phone"></i> +2348069482021</h4>
                        </div>
                    </div>
                    <div className='sec'>
                        <div>
                            <h4 className='doTitle p2'><i className="fa fa-solid fa-globe"></i> Ibadan, Nigeria</h4>
                        </div>

                    </div>
                    <div className='sec'>
                        <div>
                            <h4 className='doTitle p2'><i className="fa fa-solid fa-envelope"></i> akinolasamson1234@gmail.com</h4>
                        </div>

                    </div>

                </div>
                <div className='col-md-8 contactRight'>
                    <div>
                        <h3>Contact me!</h3>
                        <div className='sPo'>
                            <div className='sPi'></div>
                        </div>

                    </div>
                    <form onSubmit={send}>
                        <div className='row form'>
                            <div className='col-md-6 t1'>
                                <input placeholder='John Doe'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                /><br/>
                                <input
                                type='email' placeholder='Email' required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}/>
                            </div>
                            <div className='col-md-6 t2'>
                                <textarea placeholder='Your message...'
                                value={message}
                                rows="3"
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                />
                            </div>
                        </div>
                        {loading ?
                        <div>
                            <button className='btn1 btn3' disabled>Sending</button>
                                <div className="spinner-border text-center text-md-left" role="status" id="spinner-div">
                                    <button className="sr-only btn btn-primary btn-lg mt-5 text-center"></button>
                                    </div>
                        </div>:
                            <button className='btn1 btn3'>Submit</button>
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
