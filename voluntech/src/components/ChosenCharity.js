import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobForm from "./JobForm";
import Job from "./Job";

const ChosenCharity = ({charity}) => {
    
    let {id} = useParams();
    
    const [chosenCharity, setChosenCharity] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:8080/charities/${id}`)
        .then(response => response.json())
        .then(response => {
            setChosenCharity(response)
        })
    }, [id]);

    const [specificCharityJobs, setSpecificCharityJobs] = useState([]);
    
    const [chosenCharityJobs, setChosenCharityJobs] = useState([]);

    useEffect(() => {
        if (chosenCharity.jobs){
        setSpecificCharityJobs(chosenCharity.jobs)}
    }, [chosenCharity]);

    useEffect(() => {
        if (specificCharityJobs.length){
        setChosenCharityJobs(specificCharityJobs.map((job) => {
            return <Job showVolunteers={true} key={job.id} job={job}/>}
       ))}
    }, [specificCharityJobs]);

    return (
    <>
    <p>{chosenCharity.name}</p>
    <p>{chosenCharity.description}</p>
    <p>{chosenCharity.charityCause}</p>
    <JobForm chosenCharity = {chosenCharity}/>
    <p>Job listings</p>
    {chosenCharityJobs ?  <ul>{chosenCharityJobs}</ul> : <p>No jobs available</p>}
    </>
    );

}
 
export default ChosenCharity;