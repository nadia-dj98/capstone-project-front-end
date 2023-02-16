import cause from './assets/cause.png';
import pair from './assets/pair.png';
import collab_bubble from './assets/collab_bubble.png';
import collab_wheelchair from './assets/collab_wheelchair.png';
import shared_goals from './assets/shared_goals.png';
import get_hired from './assets/get_hired.png';
const About = () => {
    return ( 
        <>
      <div name='About' className='w-full my-20'>
            <div className='max-w-[1240px] mx-auto'>
                  
                  <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by charities across the UK</h2>
                  </div>
                     
                  <div className="flex items-center justify-between text-center"> 
                     
                     <div className='grid md:grid-cols-3 gap-1 px-2'>
                        <div className='py-8'>
                        
                      <img class="w-80 h-80" src={cause} alt="image description">
                        </img>
                        <p className='text-4xl font-bold text-indigo-600'>1. Find a cause </p>

                     </div>

                     <div className='py-8'>
                        <img class="w-85 h-80" src={shared_goals} alt="image description">
                        </img>
                        <p className='text-4xl font-bold text-indigo-600'>2. Make a difference</p>
                     </div>

                     <div className='py-8'>
                        <img class="rounded-full w-85 h-80" src={get_hired} alt="image description">
                        </img>
                        <p className='text-4xl font-bold text-indigo-600'>3. Get hired</p>
                     </div>

               </div>
            </div>
        </div>
      </div>
        
        </>
     );
}
 
export default About;