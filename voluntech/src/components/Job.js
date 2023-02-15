const Job = ({job}) => {
    return (  
        <>
        <div className="">
            <div className="">
                <p className = "text-lg font-bold">{job.role}</p>
                {job.charity ? <p>Charity: {job.charity.name}</p> : ""}
                <p>Description: {job.description}</p>
                <p>Start Date: {job.startDate} </p>
                <p>End Date: {job.endDate}</p>
                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{job.location}</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{job.charity.charityCause}</span>
                <div>
                    <button>Apply</button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Job;