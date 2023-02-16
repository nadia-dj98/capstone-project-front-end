const Job = ({job, showVolunteers}) => {

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
            <div className="name-card shadow-lg rounded-xl border-2 px-5 py-5 m-4 border-black overflow-y-scroll" style={{height: '30vh'}}>
            <div className="job">
                <p className = "text-lg font-bold">{job.role}</p>
                {job.charity ? <p className="font-bold">{job.charity.name}</p> : ""}
                <p>{job.description}</p>
                <p>Start date: {job.startDate} </p>
                <p>End date: {job.endDate}</p>
                {/* <p>Volunteers:{job.volunteers}</p> */}

                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{job.location}</span> 
                {job.charity ? <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ">{job.charity.charityCause}</span>  : "" }
                
                <div class="flex mt-4 space-x-3 md:mt-6">
                <form className="text-center ">
                    <button onClick={applyToJob}>Apply</button>
                </form>
                </div>

                {showVolunteers ? <ul>
                {job.volunteers.map((volunteer, index) => {
                    return(
                        <li key={index}>
                        Name: {volunteer.name}<br/>
                        Experience: {volunteer.experience}
                        </li>
                    )
                })}
                </ul> : ""}

            </div>
        </div>
        </>
    );
}
 
export default Job;