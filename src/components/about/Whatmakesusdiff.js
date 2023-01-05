import React from 'react'
import aboutwmud from '../../assets/11.jpg'
import './Whatmakesusdiff.css'
const Whatmakesusdiff = () => {
    return (
        <div className='wmud'>
            <img className='wmudImg' src={aboutwmud} alt="" />
            <div className="wmudHeading">
                <h1>WHAT MAKES US DIFFERENT?</h1>
            </div>
            <div className='wmudText'>
                <p>Currently, there are a number of organisations that offer businesses the opportunity to get or analyse their electrical usage data. </p>
                <p>But for us, that’s not going far enough. </p>
                <p>Instead, we want to provide you with a next-level solution that makes it easy for you to know what steps you need to take. </p>
                <p>This means not just providing you with the data, but actually breaking it down for you and showcasing your wastage, the areas of inefficiencies and even a dollar value as to how much you are losing, hourly, daily, monthly or annually.</p>
                <p>By framing our solution in this manner, we ensure that you don’t just get a whole heap of confusing data. Instead, we give you a clear and granular solution that will save you money and help save the environment.</p>
            </div>
        </div>
    )
}

export default Whatmakesusdiff