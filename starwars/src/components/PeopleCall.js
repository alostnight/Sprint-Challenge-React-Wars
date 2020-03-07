import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard.js";

function PeopleCall() {
    const [person, setPerson] = useState([]);
  
  
      useEffect(() => {
          axios
            .get("https://swapi.co/api/people/1/")
            .then(response => setPerson(response.data));
            }, [])
  
            useEffect(()=>{
              console.log(person)
            })
            return <div>
              <PersonCard /> 
            </div>
      }
    
    export default PeopleCall;