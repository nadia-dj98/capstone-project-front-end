import React  from "react";
import bgImg from './assets/pair.png';
import * as Scroll from 'react-scroll';

const Hero = () => {

    const scroller = Scroll.scroller;

    const scrollToAbout = () => {
      scroller.scrollTo('about', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50
      });
    };

    const scrollToPartners = () => {
      scroller.scrollTo('partners', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50
      });
    };

    return (  
        <div name='home' className='w-full h-screen bg-white flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-{1240px} m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Volunteer & Code</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Job Board</h1>
                    <p className='text-2xl'>Connecting Tech talent to job opportunities for social impact</p>

                </div>
                <div>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>

                    <p>
                        <li>  <button onClick={scrollToAbout}>About</button></li>
                        <li>  <button onClick={scrollToPartners}>Partners</button></li>
                    </p>
            </div>

        </div>
    );
}
 
export default Hero;