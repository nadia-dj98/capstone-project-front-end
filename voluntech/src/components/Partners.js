
import skylogo from './assets/skylogo.png';
import applelogo from './assets/applelogo.png';
import brightnetwork from './assets/brightnetwork.jpeg';
import partners from './assets/partners.png';
import React from 'react';


const Partners = () => {
    return (  
        <>
                <div>
                <div>
                    {/* <p>Our Partners</p> */}
                    <img className= 'h-11.5' src={partners} alt="/" />
                </div>
                <div>
                    <img className='w-auto h-20' src={skylogo} alt="/" />
                </div>
                <div>
                    <img className='w-auto h-20' src={applelogo} alt="/" />
                </div>
                <div>
                    <img className='w-auto h-20' src={brightnetwork} alt="/" />
                </div>
                </div>
        </>
    );
}
 
export default Partners;