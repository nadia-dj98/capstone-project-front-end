import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'


const NavBar = ({}) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    // Get user from UseContext
    // If the user is not null (charity or volunteer), then render the "log out" and "welcome message"
    // If the user is null, render the "log in" and "sign up" button

    // Swap out main page -- conditional rendering of Login and Register components
    // Modal -- login and register

    return (  
        <>
      <div className='w-screen h-[80px] z-10 bg-white sticky drop-shadlow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>VOLUNTECH</h1>
            <ul className='hidden md:flex'>

    
                  <li>  <Link to="/home">Home</Link> </li> 
                  {/* <li>  <Link to= "/about">About</Link></li> */}
                  <li>About</li>
                  <li>  <Link to="/jobs">Jobs</Link> </li>
                  {/* <li>  <Link to="/partners">Partners</Link></li> */}
                  <li>Partners</li>
                  <li>  <Link to="/charities">Charities</Link></li>

              </ul>
              </div>
                
              <div className='hidden md:flex pr-4'>
                
               <button className='px-8 py-3 border-none bg-transparent text-black mr-4'>
                   <Link to="/GuestLogin">Log in</Link> 
                </button> 
                  
                <button className='px-8 py-3'> 
                  <Link to="/Signup">Sign up</Link> 
               </button>
                </div>
                

          <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className='w-5'/> : <XMarkIcon className='w-5'/>}
                    </div>
                     
                    
                    </div>
                    
                    <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
                    <li className='border-b-2 border-zinc-300 w-full'>  <Link to="/home">Home</Link> </li> 
                  {/* <li>  <Link to= "/about">About</Link></li> */}
                  <li className='border-b-2 border-zinc-300 w-full'>About</li>
                  <li className='border-b-2 border-zinc-300 w-full'>  <Link to="/jobs">Jobs</Link> </li>
                  {/* <li>  <Link to="/partners">Partners</Link></li> */}
                  <li className='border-b-2 border-zinc-300 w-full'>Partners</li>
                  <li className='border-b-2 border-zinc-300 w-full'>  <Link to="/charities">Charities</Link></li>
                  
                  <div className="flex flex-col my-4">
                  <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                  </div>

                    </ul>
                </div>
                
        </>

    );
}
 
export default NavBar;