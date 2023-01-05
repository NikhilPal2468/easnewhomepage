import React from 'react'
import Nav from '../Navbar/Nav'
import cecmember from '../../assets/cecmember.jpeg'
const Footer = () => {
    return (
        <div className="footer">
            <Nav />
            <div className="footerContactDetails">
                <div className="footerContactDetailsLeft">
                    <h3>CONTACT DETAILS</h3>
                    <div>E: <a href="mailto:info@energyanalyticssolutions.com">info@energyanalyticssolutions.com</a></div>
                    <div>P: <a href="tel:+61420510329">+61 420 510 329</a></div>
                    <div>1 Sergeants Lane, St. Leonards, NSW 2065</div>
                </div>
                <div></div>
                <div className="footerContactDetailsRight">
                    <img src={cecmember} alt="" />
                </div>
            </div>
            <div className='lastgreenline'></div>
        </div>
    )
}

export default Footer