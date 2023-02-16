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
    <p className="text-2xl font-bold gap-1 text-center leading-loose">{chosenCharity.name}</p>
    
    <div className="text-center">
        <p>{chosenCharity.description}</p>
    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{chosenCharity.charityCause}</span>
    </div>

    <div className="grid md:grid-cols-1 gap-1 px-4 py-4">
    <p className="text-xl font-bold gap-1 text-center leading-loose">Add a listing</p>
    <JobForm chosenCharity = {chosenCharity}/>

    <p className="text-xl font-bold gap-1 text-center leading-loose">Current listings</p>
    {chosenCharityJobs ?  <ul>{chosenCharityJobs}</ul> : <p>No jobs available</p>}
    </div>
    </>
    );

}
 
export default ChosenCharity;