import React from 'react'
import './Howwedoit.css'
const Howwedoit = () => {
    return (
        <div className="howwedoit">
            <div className="howwedoitFirst">
                <h1>HERE'S HOW WE DO IT</h1>
            </div>
            <div className="howwedoitSecond">
                <div className='howwedoitSecondCircle'>
                    <div className='howwedoitSecondCircleOut'></div>
                    <div className='howwedoitSecondCircleIn'>Step 1</div>
                    <center className="howwedoitSecondText">We assess Your needs and determine the level of monitoring you will require.
                    </center>
                </div>
                <div className='howwedoitSecondCircle'>
                    <div className='howwedoitSecondCircleOut'></div>
                    <div className='howwedoitSecondCircleIn'>Step 2</div>
                    <center className="howwedoitSecondText">We get you set up, configuring and installing our smart equipment on site.
                    </center>
                </div>
                <div className='howwedoitSecondCircle'>
                    <div className='howwedoitSecondCircleOut'></div>
                    <div className='howwedoitSecondCircleIn'>Step 3</div>
                    <center className="howwedoitSecondText">We start collecting data in real time. We then derive actionable insights based on real-time data, whilst measuring effectiveness continuously.
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Howwedoit