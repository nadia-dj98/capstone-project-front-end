
import skylogo from './assets/skylogo.png';
import applelogo from './assets/applelogo.png';
import brightnetwork from './assets/brightnetwork.jpeg';
import partners from './assets/partners.png';
import React from 'react';


const Partners = () => {
    return(  
    <>
    <div name='Partners' className='w-full my-20'>
          <div className='max-w-[1240px] mx-auto'>
              <div className='text-center'>
                  <h2 className='text-5xl font-bold'>Partners</h2>
                  {/* <img class=" w-96 h-30 my--50" src={partners} alt="image description"> */}
                      {/* </img> */}

                  
                   </div>
                   
                   <div className='grid md:grid-cols-3 gap-1 px-2'>
                      <div className=' py-8 '>
         
                      
                    <img class=" w-96 h-30" src={skylogo} alt="image description">
                      </img>

                   </div>
                   <div className=' py-8 '>
           
                      <img class=" w-96 h-50" src={applelogo} alt="image description">
                      </img>
                   </div>
                   <div className=' py-8 '>
                    
                      <img class=" w-96 h-40" src={brightnetwork} alt="image description">
                      </img>
                   </div>
          </div>
      </div>
      </div>
      
      </>
   );
}

                
                
                
              

 
export default Partners;