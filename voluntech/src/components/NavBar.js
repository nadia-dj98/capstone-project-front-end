import { Link } from "react-router-dom";

const NavBar = ({}) => {

    // Get user from UseContext
    // If the user is not null (charity or volunteer), then render the "log out" and "welcome message"
    // If the user is null, render the "log in" and "sign up" button

    // Swap out main page -- conditional rendering of Login and Register components
    // Modal -- login and register

    return (  
        <>
      <div className='w-screen h-[80px] z-10 bg-white  fixed drop-shadlow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>VOLUNTECH</h1>
            <ul className='hidden md:flex'>

    
                  <li>  <Link to="/home">Home</Link> </li> 
                  <li>  <Link to= "/about">About</Link></li>
                  <li>  <Link to="/jobs">Jobs</Link> </li>
                  <li>  <Link to="/partners">Partners</Link></li>
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
                </div>
                </div>
                
        </>

    );
}
 
export default NavBar;