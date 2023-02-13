import { useState, useEffect } from "react";
import JobList from "../components/JobList";


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
   <JobList jobs ={jobs}/>
           
            
        </>
    );
}
 
export default JobContainer;