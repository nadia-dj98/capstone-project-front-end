
import skylogo from './assets/skylogo.png';
import applelogo from './assets/applelogo.png';
import brightnetwork from './assets/brightnetwork.jpeg';
import lloyds from './assets/lloyds.png';
import Airbnb_logo from './assets/Airbnb_logo.jpg'
import google from './assets/google.png'
import partners from './assets/partners.png';
import React from 'react';


const Partners = () => {
    return(  
    <>
    <div name='Partners' className='w-full h-screen my-20'>
          <div className='max-w-[1240px] mx-auto'>
              <div className='text-center'>
                  <h2 className='text-5xl font-bold'>Partners</h2>
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

                   <div className=' py-8 '>
                    
                    <img class=" w-96 h-40" src={lloyds} alt="image description">
                    </img>
                 </div>

                 <div className=' py-8 '>
                    
                    <img class=" w-100 h-40" src={Airbnb_logo} alt="image description">
                    </img>
                 </div>

                 <div className=' py-8 '>
                    
                    <img class=" w-100 h-40" src={google} alt="image description">
                    </img>
                 </div>


          </div>
      </div>
      </div>
      
      </>
   );
}

                
                
                
              

 
export default Partners;