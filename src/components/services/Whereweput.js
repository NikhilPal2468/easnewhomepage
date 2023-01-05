import React from 'react'
import './Whereweput.css'
import servicesStripImg from '../../assets/02.jpg'
const Whereweput = () => {
    return (
        <>

            <div className="wwpe">
                <h1>WHERE WE PUT OUR ENERGIES</h1>
                <div className="wwpeText">
                    <div className="wwpeTextLeft">
                        <p>Many businesses don’t really question or understand their energy consumption, and even fewer know how to reduce their carbon footprint and get to net zero. </p>
                        <p>Matters are not helped by the fact that most businesses receive a monthly bill that only tells them their overall usage and how much they have to pay.</p>
                    </div>
                    <div className="wwpeTextRight">
                        <p>Unfortunately, this doesn’t provide them with insights as to where and how their energy is being used, if there is any wastage or if their machinery is inefficient. </p>
                        <p>Because of this, businesses (and users) are often in the dark (literally if they don’t pay the bill) when trying to become efficient and in control of their usage. </p>
                    </div>
                </div>
            </div>
            <div className="servicesStrip">
                <img src={servicesStripImg} alt="" />
                <h3 className="servicesStripText">
                    AND THAT’S WHERE AE&S COMES IN. WE HELP BUSINESSES GAIN CONTROL OF THEIR USAGE AND EXPENDITURE AND MOVE EVER CLOSER TOWARDS NET ZERO.
                </h3>
            </div>
        </>
    )
}

export default Whereweput