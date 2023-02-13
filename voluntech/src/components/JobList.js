import Job from "./Job";

const JobList = ({jobs}) => {
    
    const jobComponents = jobs.map(job => {
     return <Job key={job.id} job={job} />}
    )
    
    return ( 
        <>
        <h2>List of jobs</h2>
        <div>
        {jobComponents}
        </div>
        </>
     );
}
 
export default JobList;