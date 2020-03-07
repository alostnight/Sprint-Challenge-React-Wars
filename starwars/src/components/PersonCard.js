import React from "react";
import PeopleCall from "./PeopleCall";


const PersonCard = props => {
  return (
    <li className="person-card" key={props.id}>
        <h2>Name: {props.data.name}</h2>
        <p>Gender: {props.data.gender}</p>
        <p>Height: {props.data.height}cm</p>
        <p>Mass: {props.data.mass}kg</p>
        <p>Birth Year: {props.data.birth_year}</p>      
    </li>
  );
};

export default PersonCard;