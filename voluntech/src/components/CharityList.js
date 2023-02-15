import Charity from "./Charity";

const CharityList = ({charities, jobs}) => {
    
    const charityComponents = charities.map(charity => {
        return <Charity key={charity.id} charity={charity} />}
       )
       
       
       return ( 
           <>
           <h2>List of charities</h2>
           <div>
                {charityComponents}
           </div>
           </>
        );
}
 
export default CharityList;