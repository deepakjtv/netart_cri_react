import React from 'react';
import './css/Product.css';
import product from './images/product.png';

const Product = () => {
    return (
        <div className='product'>
            <h4>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RUSULTING
                IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </h4>
            <div className='img-box'>
                <img src={product} alt="img not found" />
            </div>
            <h4>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </h4>
            <hr/>
        </div>
        
    )
}
export default Product;