import React from 'react'
import './MeetEAS.css'
const MeetEAS = () => {
    return (
        <div className="whatwedo">
            <div className="wwdFirst">
                <h1>MEET EA&S</h1>
                <center></center>
            </div>
            <div className="wwdSecond">
                <div className="wwdSecondLeft">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: "0px 50px",
                        padding: "10px 84px"
                    }}>
                        <h3 style={{ color: "#1fb25a", fontSize: "20px" }}>HI, WE’RE EA&S. A FAST GROWING AND PROGRESSIVE AUSTRALIAN BASED ENERGY SOLUTIONS COMPANY ON A MISSION.</h3>
                        <p>To make energy management and optimisation easy for everyone. And we won’t stop until every building in Australia has net-zero carbon emission.  </p>
                    </div>
                </div>
                <div className="measSecondRight">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: "0px 50px",
                        padding: "10px 69px"
                    }}>
                        <p>To make this happen, our team of experts partner with your organisation, using real-time enriched data and a wealth of electrical engineering expertise, to help you easily and accurately optimise your energy use and reduce your carbon footprint.</p>
                        <p>Our goal is an audacious one. Nothing less than helping you to become 100% self-reliant when it comes to energy, and, in doing so, help the environment. </p>
                        <p>So if you want to start making a positive difference, it’s as easy as EA&S.</p>
                        <button className="navbarLink border"><a href="https://calendly.com/energyanalyticssolutions/book-a-time-with-ash" target="_blank" rel="noreferrer" >WANNA KNOW MORE?</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetEAS