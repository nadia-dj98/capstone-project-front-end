import Job from "./Job";

const JobList = ({jobs}) => {
    
    const jobComponents = jobs.map(job => {
        return <Job key={job.id} job={job} />}
    )
    
    return ( 
        <>

        <div className="grid md:grid-cols-3 gap-1 px-2 ">
            {jobComponents}
        </div>
        </>
     );
}
 
export default JobList;