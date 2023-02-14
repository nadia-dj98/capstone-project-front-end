import JobForm from "./JobForm";
import JobList from "./JobList";

const Charity = ({charity, jobs}) => {
    return ( 
        <>
            <div className="name-card">
                <div className="charity">
                    <p>Charity Name: {charity.name}</p>
                    <p>Description: {charity.description}</p>
                    <p>Cause: {charity.cause} </p>
                </div>
                <JobForm jobs={jobs}/>

            </div>
        </>
     );
}
 
export default Charity;