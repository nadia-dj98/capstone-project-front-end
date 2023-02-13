import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import JobContainer from "../containers/JobContainer";
import About from "./About";
import Partners from "./Partners";

const NavBar = ({}) => {
    return (  
        <>
        <BrowserRouter>
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

            <Routes>
                <Route path= "/about" element =
                {<About/>}
                />
                <Route path= "/jobs" element=
                {<JobContainer/>}
                />
                <Route path = "/partners" element =
                {<Partners/>}
                />
            </Routes>
        </BrowserRouter>
        </>
    );
}
 
export default NavBar;