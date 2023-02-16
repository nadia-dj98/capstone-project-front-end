import bgImg from './assets/pair.png';
const About = () => {
    return ( 
        <>
      <div name='About' className='w-full my-20'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by charities across the UK</h2>
                    
                     </div>
                     
                     <div className='grid md:grid-cols-3 gap-1 px-2'>
                        <div className=' py-8 '>
                        <p className='text-4xl font-bold text-indigo-600'>1. Find a cause </p>
                        
                      <img class="rounded-full w-96 h-96" src={bgImg} alt="image description">
                        </img>

                     </div>
                     <div className=' py-8 '>
                        <p className='text-4xl font-bold text-indigo-600'>2. Make a difference</p>
                        <img class="rounded-full w-96 h-96" src={bgImg} alt="image description">
                        </img>
                     </div>
                     <div className=' py-8 '>
                        <p className='text-4xl font-bold text-indigo-600'>3. Get hired</p>
                        <img class="rounded-full w-96 h-96" src={bgImg} alt="image description">
                        </img>
                     </div>
            </div>
        </div>
        </div>
        
        </>
     );
}
 
export default About;