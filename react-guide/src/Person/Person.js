import React from 'react';

import './Person.css';
import Radium, {StyleRoot} from 'radium';
const person = (props) =>{
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };


    return ( 
        <div className = "Person" style={style}>
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

export default Radium(person)