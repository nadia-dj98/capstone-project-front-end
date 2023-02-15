import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobForm from "./JobForm";
import Job from "./Job";

//map jobs to show all jobs for this particular charity (like how we've done previously)
//need conditional rendering - (or else will show undefined.name) - because the info you're trying to use in this component does not exist when the page is loaded
//whenever you have fetch request/asyn, this is when you need to use conditional rendering 

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
            return <Job key={job.id} job={job}/>}
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

    {chosenCharity.map((job) => {
        return(
            <ul>
                {job.volunteers.map((volunteer) => {
                    return(
                        <>
                        <li key={volunteer.id}>Name: {volunteer.name}</li>
                        <li key={volunteer.id}>Experience: {volunteer.experience}</li>
                        </>
                    )
                })}
            </ul>
    )
    })}


    
    {/* // {
    //     cakes.map((cake, index) => {
    //         return(
    //             <div key={index}>
    //                 <h3>{cake.cakeName}</h3>
    //                 <ul>
    //                     {cake.ingredients.map((ingredient, index) => {
    //                         return(
    //                             <li key={index}>{ingredient}</li>
    //                         )
    //                     })}
    //                 </ul>
    //             </div>
    //         )
    //     })
    // } */}

    </>
    );

}
 
export default ChosenCharity;