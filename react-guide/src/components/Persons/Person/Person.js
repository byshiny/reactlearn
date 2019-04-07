import React, {Component, Fragment} from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
class Person extends Component{
    render() {
        console.log('[Person.js] rendering...');
        return ( 
            <aux>
            <p onClick={ this.props.click }> &nbsp;I am&nbsp;
            { this.props.name } and I am&nbsp;
    {this.props.age}&nbsp; years old mwahahahahahahahahah
            </p>
            <p>
                {this.props.children}
            </p>
            <input type="text" onChange = {this.props.changed} value={this.props.name}></input>
    
            </aux>
        )
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

}
export default withClass(Person, classes.Person)