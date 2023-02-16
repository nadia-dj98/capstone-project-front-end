import React  from "react";
import bgImg from './assets/pair.png';

const Hero = () => {
    return (  
        <div name='home' className='w-full h-screen bg-white flex flex-col justify-between pr-20 pl-20 '>
            <div className='grid md:grid-cols-2 max-w-{1240px} m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Volunteer and make a difference</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Job Board</h1>
                    <p className='text-2xl'>Connecting tech talent to job opportunities for social impact</p>

                </div>
                <div>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>

            </div>

        </div>
    );
}
 
export default Hero;