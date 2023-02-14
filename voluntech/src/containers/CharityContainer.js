import { useState, useEffect } from "react";
import CharityList from "../components/CharityList";

const CharityContainer = ({jobs, setJobs}) => {
    const [charities, setCharities] = useState([]);

    useEffect (() => {
        fetch("http://localhost:8080/charities")
        .then(response => response.json())
        .then(response => {
            setCharities(response)
        })
    },[]);


    return ( 
        <CharityList charities = {charities} job={jobs}/>
     );
}
 
export default CharityContainer;