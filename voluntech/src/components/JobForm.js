import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../App";

const JobForm = ({chosenCharity}) => {

    const [user, setUser] = useContext(UserContext);

    const [role, setRole] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    // const [charity, setCharity] = useState("");

    
    const postNewJob = (newJob) => {
        fetch(`http://localhost:8080/charities/${chosenCharity.id}/jobs`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newJob),
        })
        // .then((response) =>response.json())
        // .then((response)=> {
        // setJobs([...jobs,response]);
    // })
    }

    const handleFormSubmit = (event) => {
     
        postNewJob({role, description, startDate, endDate, location});
        // setRole("");
        // setDescription("");
        // setStartDate("");
        // setEndDate("");
        // setLocation("");
        // setCharity(0);
    }


    return ( 
        <form onSubmit={handleFormSubmit} className="job-form name-card shadow-lg rounded-xl border-2 px-5 py-5 border-black overflow-y-scroll w-96" style={{height: '100%', width: '100%'}}>
            <h2 className="font-bold">Role:</h2>
            <input className="rounded-xl border-2 px-1 py-1 border-black m-1" style={{width: '80%'}}
                type = "text" 
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                />
            <div> 
            <input className="rounded-xl border-2 px-1 py-1 border-black m-1" style={{height: '10vh', width: '80%'}}
                id="text-area"
                type = "text"
                rows="5"
                cols="50" 
                placeholder="Description"
                value = {description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <h3 className="font-bold">Start date:</h3>
            <input
                id ="startDate"
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            /> 
            <h3 className="font-bold">End date:</h3>
            <input
                id ="endDate"
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />       
            <h2 className="font-bold">Location:</h2>
            <input className="rounded-xl border-2 px-1 py-1 border-black m-1" 
                type = "text" 
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />         
            <button>Submit</button>
        </form>
    );
}
 
export default JobForm;