import React from 'react';
import './css/Footer.css';
import { FaFacebook, FaPhone, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <h4 className='f1'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS  </h4>
            <p className='f2'>
                CHAMICALS & PROCESS<i> | </i>POWER<i> | </i>WATER & WASTE WATER<i> | </i>
                OILS & GAS<i> | </i>PHARMA<i> | </i>SUGERSS & DISTI<i> | </i>PAPERS & PULP<i> | </i>
                MARINE & DEFENCE<i> | </i>METAL & MINING<i> | </i>FOOD & BEVERAGE<i> | </i>
                PETROCHEMICAL & REFINERIES<i> | </i>SOLAR<i> | </i>BUILDING<i> | </i>
                HVAC<i> | </i>FIRE FIGHTING<i> | </i>AGRICULTURE & RESIDENTIAL
            </p>
            <div className='f3'>
                <a href="#"><FaPhone />Toll free 1800 200 1234</a>
                <a href="#"><FaFacebook />www.facebook.com/cripumps</a>
                <a href="#"><FaGlobe />www.cripumps.com</a>
            </div>
        </div>
    );
}
export default Footer;