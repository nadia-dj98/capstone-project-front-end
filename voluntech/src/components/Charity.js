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
                    <p>Cause: {charity.cause} </p>
                    <button>
                    <Link className="linkbutton" to={`/charities/${charity.id}`} >Post Job</Link>
            </button>
                </div>
                {/* <JobForm jobs={jobs}/> */}

            </div>
        </>
     );
}
 
export default Charity;