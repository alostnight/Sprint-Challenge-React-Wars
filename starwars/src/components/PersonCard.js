import React from "react";
import PeopleCall from "./PeopleCall";
import styled from "styled-components";

const Names = styled.h2 `
  color: red;
  font-size: 3rem;
`

const Details = styled.p `
  color: blue;
  font-size: 1.7rem;
`
const PersonCard = props => {
  return (
    <li className="person-card" key={props.id}>
        <Names>Name: {props.data.name}</Names>
        <Details>Gender: {props.data.gender}</Details>
        <Details>Height: {props.data.height}cm</Details>
        <Details>Mass: {props.data.mass}kg</Details>
        <Details>Birth Year: {props.data.birth_year}</Details>      
    </li>
  );
};

export default PersonCard;