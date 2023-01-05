import React from 'react'
import whatwedo from '../../assets/07.jpg'
import './Whatwedo.css'
const Whatwedo = () => {
    return (
        <div className="whatwedo">
            <div className="wwdFirst">
                <h1>WHAT WE DO</h1>
                <center>In simple terms, we put your business in control of your energy usage with cost-effective, accurate, real-time data for each of your sites at your fingertips.</center>
            </div>
            <div className="wwdSecond">
                <div className="wwdSecondLeft">
                    <div style={{ flex: "0.4" }}></div>
                    <div style={{ flex: "0.5" }}>

                        <p>At the same time, we help you define tangible, measurable,realistic and, above all, achievable goals for your organisation.
                        </p>
                        <p>This enables you to reduce waste and make savings with ease and confidence and without the headache of complex and expensive energy audits. </p>
                        <p>Our core capabilities include:-</p>
                        <li>24 x 7 real-time energy audit</li>
                        <li>Intuitive online user-interface</li>
                        <li>Predictive-modelling</li>
                        <div style={{ margin: "20px 0px", color: "#2e3192" }}>So, if you want to start saving energy and start saving the planet, then start by checking out our demo today. </div>
                        <button className="navbarLink border"><a href="https://calendly.com/energyanalyticssolutions/book-a-time-with-ash" target="_blank" rel="noreferrer" >BOOK A DEMO NOW</a></button>
                    </div>
                    <div style={{ flex: "0.1" }}></div>
                </div>
                <div className="wwdSecondRight">
                    <img src={whatwedo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Whatwedo