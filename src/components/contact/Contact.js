import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <h1>CONTACT US</h1>
            <div className="contactUs">
                <div className="contactUsMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.6122863825876!2d151.19193731744386!3d-33.82231720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aeddc75b0127%3A0x915cb8b559e706d2!2sThe%20Forum%2C%201%20Sergeants%20Ln%2C%20St%20Leonards%20NSW%202065%2C%20Australia!5e0!3m2!1sen!2sin!4v1672860156067!5m2!1sen!2sin" width="400" height="400" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' />
                    <p><span style={{ color: "#1fb25a" }}>Email:</span> <span style={{ color: "#2e3192" }}>info@energyanalyticssolutions.com</span></p>
                    <p><span style={{ color: "#1fb25a" }}>Phone:</span> <span style={{ color: "#2e3192" }}>+61 420 510 329</span></p>
                    <p><span style={{ color: "#1fb25a" }}>Address:</span> <span style={{ color: "#2e3192" }}>1 Sergeants Lane, St. Leonards, NSW 2065</span></p>
                </div>
                <div className="contactUsForm">
                    <form action="">
                        <input name='fullname' type="text" placeholder='First and last name' required />
                        <input name='phone' type="number" placeholder='Mobile' required />
                        <input name='email' type="email" placeholder='Email' required />
                        <textarea rows={10} name='message' placeholder='Message' required />
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact