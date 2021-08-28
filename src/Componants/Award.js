import React from 'react';
import './css/Award.css';
import trophy from './images/trophy.png';
import award from './images/award.png';


const Award = () => {
    return (
        <div className='container'>
            <div className='trophy'>
                <img src={trophy} alt="img not found" />
            </div>
            <div className='award'>

                <h4>C.R.I PUMPS WINS THE NATIONAL ENERHY CONSERVATION AWARD 2018 for the 4th time.</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius laudantium ea dolorem eum ut earum dicta officia maxime?
                        Iure enim facilis esse dolore beatae quis
                        sed doloribus qui deleniti sunt?
                    </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius laudantium ea dolorem eum ut earum dicta officia maxime?
                        Iure enim facilis esse dolore beatae quis sed
                    </li>
                </ul>
                <img src={award} alt="img not found" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis, iusto officiis? Quam delectus illo nihil,
                    necessitatibus neque nesciunt autem aliquam iste
                    a sit perspiciatis voluptas repudiandae facere quas
                    necessitatibus neque nesciunt autem aliquam iste
                    a sit perspiciatis voluptas.
                </p>
            </div>
        </div>
    );
}

export default Award;