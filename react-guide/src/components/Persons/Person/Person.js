import React, {Component} from 'react';

import classes from './Person.css';

class Person extends Component{
    render() {
        console.log('[Person.js] rendering...');
        return ( 
            <div className = {classes.person}>
            <p onClick={ this.props.click }> &nbsp;I am&nbsp;
            { this.props.name } and I am&nbsp;
    {this.props.age}&nbsp; years old mwahahahahahahahahah
            </p>
            <p>
                {this.props.children}
            </p>
            <input type="text" onChange = {this.props.changed} value={this.props.name}></input>
    
        </div>
        )
    }

}

export default Person