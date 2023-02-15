import Charity from "./Charity";

const CharityList = ({charities, jobs}) => {
    
    const charityComponents = charities.map(charity => {
        return <Charity key={charity.id} charity={charity} />}
       )
    
    return ( 
        <>
        <p className="text-2xl font-bold gap-1 text-center leading-loose">Charities</p>
        <div className="grid md:grid-cols-3 gap-1 px-2">
            {charityComponents}
        </div>
        </>
    );
}
 
export default CharityList;