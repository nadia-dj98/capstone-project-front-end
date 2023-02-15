import JobForm from "./JobForm";
import JobList from "./JobList";
import { Link } from "react-router-dom";

const Charity = ({charity, jobs}) => {
    return ( 
        <>
            <div className="name-card">
                <div className="charity">
                    <p>Charity Name: {charity.name}</p>
                    <p>Description: {charity.description}</p>
                    <p>Cause: {charity.charityCause} </p>
                    <Link to={`/charities/${charity.id}`} > 
                        <button>Charity profile</button> 
                    </Link>
                
                    
                </div>
                {/* <JobForm jobs={jobs}/> */}

            </div>
        </>
     );
}
 
export default Charity;