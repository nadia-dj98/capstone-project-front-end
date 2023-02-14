import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import JobContainer from './containers/JobContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Partners from "./components/Partners";
<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> 908ce3a7dcb4450aa36de41f26a43c374c9f8ccd
import { createContext } from 'react';
import JobForm from './components/JobForm';
// import Login from "./components/Login";
// import Login from "./components/Register";

export const UserContext = createContext(null)

function App() {

  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);

 
  const [jobs, setJobs] = useState([]);

    useEffect (() => {
        fetch("http://localhost:8080/jobs")
        .then(response => response.json())
        .then(response => {
            setJobs(response)
        })
    },[]);
    


  useEffect (() => {
    fetch("http://localhost:8080/jobs")
    .then(response => response.json())
    .then(response => {
        setJobs(response)
    })
},[]);

  return (
   <>
   
  <BrowserRouter>

    <UserContext.Provider value = {[user, setUser]}>
    <NavBar jobs={jobs}/>

    <Routes>

        <Route path= "/home" element = 
        {<Home/>}
        />
        <Route path= "/about" element =
        {<About/>}
        />
<<<<<<< HEAD
        <Route path= "/jobs" element =
        {<JobContainer jobs={jobs}/>}
        />
        <Route path= "/postjob" element = 
        {<JobForm/>}
=======
        <Route path= "/jobs" element=
        {<JobContainer jobs = {jobs}/>}
>>>>>>> 908ce3a7dcb4450aa36de41f26a43c374c9f8ccd
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
