import { Link } from "react-router-dom";

const NavBar = ({}) => {

    // Get user from UseContext
    // If the user is not null (charity or volunteer), then render the "log out" and "welcome message"
    // If the user is null, render the "log in" and "sign up" button

    // Swap out main page -- conditional rendering of Login and Register components
    // Modal -- login and register

    return (  
        <>
    <ul>
                    <Link to="/">Home</Link>
                    <Link to= "/about">About</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/partners">Partners</Link>
     </ul>
                
                <button>
                    <Link to="/GuestLogin">Log in</Link>
                </button>
                
                <button>
                    <Link to="/Signup">Sign up</Link>
                </button>
        </>
    );
}
 
export default NavBar;