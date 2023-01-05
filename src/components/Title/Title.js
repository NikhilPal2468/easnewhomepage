import React from 'react'
import './Title.css'
const Title = ({ title, bgImage }) => {
    return (
        <div className="title">
            <img src={bgImage} alt="" />
            <div className="titleText">
                <h1>{title}</h1>
                {title === "YOUR SOLUTION TO SUCCESSFUL ENERGY SAVINGS" &&
                    <div className='titleSmallText'>
                        <div>
                            We put your business in control of your energy usage with cost-effective, accurate, real-time data for each of your sites at your fingertips so you can reduce waste.
                        </div>
                        <button>READ MORE</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Title