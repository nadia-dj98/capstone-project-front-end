import { useState, useEffect } from "react";
import JobList from "../components/JobList";
import Hero from "../components/Hero";
import Partners from "../components/Partners";

const JobContainer = ({jobs}) => {
    
    return (  
        <>
       
        
        <JobList jobs ={jobs}/>
            
        <Partners/>
        </>
    );
}
 
export default JobContainer;