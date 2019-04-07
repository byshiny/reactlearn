import React, {Component, Fragment} from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
class Person extends Component{
    render() {
        console.log('[Person.js] rendering...');
        return ( 
            <Fragment>
            <p onClick={ this.props.click }> &nbsp;I am&nbsp;
            { this.props.name } and I am&nbsp;
    {this.props.age}&nbsp; years old mwahahahahahahahahah
            </p>
            <p>
                {this.props.children}
            </p>
            <input type="text" onChange = {this.props.changed} value={this.props.name}></input>
    
            </Fragment>
        )
    }

}

export default Person