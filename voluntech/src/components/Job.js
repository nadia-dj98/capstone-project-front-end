const Job = ({job}) => {
    return (  
        <>
        <div className="">
            <div className="">
                <p>Role: {job.role}</p>
                {job.charity ? <p>Charity: {job.charity.name}</p> : ""}
                <p>Description: {job.description}</p>
                <p>Start Date: {job.startDate} </p>
                <p>End Date: {job.endDate}</p>
                <p>Location: {job.location}</p>
                <button>Apply</button>
            </div>
        </div>
        </>
    );
}
 
export default Job;