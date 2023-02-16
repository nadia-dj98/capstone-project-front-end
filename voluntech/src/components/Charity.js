import { Link } from "react-router-dom";

const Charity = ({charity, jobs}) => {
    return ( 
        <>
            <div className="name-card shadow-lg rounded-xl border-2 px-5 py-5 m-4 border-black overflow-y-scroll" style={{height: '30vh'}}>
                <div className="charity">
                    <p className = "text-lg font-bold">{charity.name}</p>
                    <p>{charity.description}</p>
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{charity.charityCause} </span> 
                    
                    <div class="flex mt-4 space-x-3 md:mt-6">
                    <Link to={`/charities/${charity.id}`} > 
                        <div>
                            <button>Charity profile</button> 
                        </div>
                    </Link>
                    </div>
                
                    
                </div>
                {/* <JobForm jobs={jobs}/> */}

            </div>
        </>
     );
}
 
export default Charity;