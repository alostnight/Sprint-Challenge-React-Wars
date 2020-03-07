import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";


const PeopleCall = () => {

	const [Person, setPerson] = useState([]);

	useEffect(() => {
		axios.get('https://swapi.co/api/people/')
		.then(res => {
			setPerson(res.data.results);			
		})
		.catch(err => console.log('Get request failed', err))
    }, [])
    useEffect(() => {
        console.log(Person);
      }, [Person]);

	return (
		<ul>
			{Person.map((data, i) => (
	            <PersonCard data={data} key={i}/>
	        ))}
	    </ul>
        
    )


}

export default PeopleCall


