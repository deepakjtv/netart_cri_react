import React from 'react';

import './css/Logo.css';
import logo from './images/logo.png'

const Logo=()=>{
    return(
        <div className="logo">
            <img src={logo} alt="logo not found"/>
            </div>
    );
}
export default Logo;

