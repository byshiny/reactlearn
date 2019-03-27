import React from 'react';

import classes from './Person.css';
const person = (props) =>{
    return ( 
        <div className = {classes.person}>
        <p onClick={ props.click }> &nbsp;I am&nbsp;
        { props.name } and I am&nbsp;
{props.age}&nbsp; years old mwahahahahahahahahah
        </p>
        <p>
            {props.children}
        </p>
        <input type="text" onChange = {props.changed} value={props.name}></input>

    </div>
    )
}

export default person