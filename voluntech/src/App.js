import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import JobContainer from './containers/JobContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Partners from "./components/Partners";
import { useState } from 'react';
import { createContext } from 'react';
// import Login from "./components/Login";
// import Login from "./components/Register";

export const UserContext = createContext(null)

function App() {

  // Create a state for user - starts off as null - done
  const [user, setUser] = useState(null);

  // Using UseContext, we will pass down "user" - done

  return (
   <>
   
  <BrowserRouter>

    <UserContext.Provider value = {[user, setUser]}>
    <NavBar/>

    <Routes>
        <Route path= "/about" element =
        {<About/>}
        />
        <Route path= "/jobs" element=
        {<JobContainer/>}
        />
        {/* <Route path="/login" element=
        {<Login/>}
        />
        <Route path="/register" element=
        {<Register/>}
        /> */}
    </Routes>

    <Partners/>
    
    <Footer/>
    </UserContext.Provider>

  </BrowserRouter>
    
   </>
  );
}

export default App;
