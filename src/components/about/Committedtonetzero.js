import React from 'react'
import netzero from '../../assets/12.jpg'
import co2Down from '../../assets/13.jpg'
import './Committedtonetzero.css'
const Committedtonetzero = () => {
    return (
        <div className="ctnz">
            <img className='ctnzImg' src={netzero} alt="" />
            <h1>COMMITTED TO NET-ZERO</h1>
            <div className="ctnzText">
                <div className="ctnzTextLeft">
                    <h3>WE ARE COMMITTED TO ENSURING THAT EVERY BUILDING IN AUSTRALIA, FROM THE LARGEST SKYSCRAPER TO THE SMALLEST CORNER STORE, ACHIEVES A NET-ZERO CARBON EMISSION. </h3>
                </div>
                <div className="ctnzTextRight">
                    <p>

                        We believe it is imperative for businesses to become energy efficient and reduce carbon emissions. And we are committed to putting you in control of your energy usage with cost-effective, accurate, real-time data so you can confidently and easily make a difference.
                    </p>
                </div>
            </div>
            <div className="partners">
                <center>

                    <h1>OUR PARTNERS ON THE ROAD TO REDUCING EMISSIONS</h1>
                </center>
                <div className="partnersText">
                    <div className="partnersTextLeft">
                        <div>

                            <p>Currently we partner with KOI and are conducting joint research into:-</p>
                            <li> Identifying the critical factors that affect and influence energy usage</li>
                            <br />
                            <li>Using these factors along with technology like AI and machine learning to allow the identification of waste energy automatically</li><br />
                            <li>Providing the conclusion in an easy to understand manner so the end user can act on it and make savings</li>
                        </div>
                    </div>
                    <div className="partnersTextRight">
                        <div>

                            <p>We are also collaborating with UNSW on a project to:-</p>
                            <li>understand the needs of non-technical business owners/decision makers</li>
                            <br />
                            <li>Apply design-thinking to determine how to reduce the complexity of the information and present it in an intuitive and easy to understand format for our users</li>
                        </div>
                        <div>
                            <img src={co2Down} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Committedtonetzero