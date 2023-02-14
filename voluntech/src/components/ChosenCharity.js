import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobForm from "./JobForm";

//map jobs to show all jobs for this particular charity (like how we've done previously)
//need conditional rendering - (or else will show undefined.name) - because the info you're trying to use in this component does not exist when the page is loaded
//whenever you have fetch request/asyn, this is when you need to use conditional rendering 

const ChosenCharity = () => {
    let {id} = useParams();
    const [chosenCharity, setChosenCharity] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/charities/${id}`)
        .then(response => response.json())
        .then(response => {
            setChosenCharity(response)
        })
    }, [id])
    return (
    <>
   <h1>Hello</h1> 
   <p>{chosenCharity.name}</p>
   <p>{chosenCharity.description}</p>
   <p>{chosenCharity.charityCause}</p>
    <JobForm chosenCharity = {chosenCharity}/>
    </>
    );

}
 
export default ChosenCharity;