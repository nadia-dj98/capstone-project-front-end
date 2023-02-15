const Job = ({job}) => {

    const applyToJob = () => {
        const applicationBody = {
            jobId: job.id, 
            volunteerId: 1
        }
        fetch(`http://localhost:8080/jobs/${job.id}/apply`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(applicationBody),
        })
    }
    
    return (  
        <>
        <div className="">
            <div className="">
                <p className = "text-lg font-bold">{job.role}</p>
                {job.charity ? <p>Charity: {job.charity.name}</p> : ""}
                <p>Description: {job.description}</p>
                <p>Start Date: {job.startDate} </p>
                <p>End Date: {job.endDate}</p>
                {/* <p>Volunteers:{job.volunteers}</p> */}
                 <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{job.location}</span> 
                 
               {job.charity ? <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{job.charity.charityCause}</span>  : "" }
                <div>
                    <button onClick={applyToJob}>Apply</button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Job;