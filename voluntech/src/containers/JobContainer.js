import { useState, useEffect } from "react";
import JobList from "../components/JobList";
import Hero from "../components/Hero";
import Partners from "../components/Partners";

const JobContainer = () => {
    
const [jobs, setJobs] = useState([]);

useEffect (() => {
    fetch("http://localhost:8080/jobs")
    .then(response => response.json())
    .then(response => {
        setJobs(response)
    })
},[]);


    
    
    return (  
        <>
        <Hero/>
        
        <JobList jobs ={jobs}/>
            
        <Partners/>
        </>
    );
}
 
export default JobContainer;