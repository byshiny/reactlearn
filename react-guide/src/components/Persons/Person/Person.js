import React, {Component, Fragment} from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
class Person extends Component{

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }


    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return ( 
            <aux>
                
                {this.context.authenticated ? <p> Authenticated!</p> : <p> Please log in</p>}
            
            
            <p onClick={ this.props.click }> &nbsp;I am&nbsp;
            { this.props.name } and I am&nbsp;
    {this.props.age}&nbsp; years old mwahahahahahahahahah
            </p>
            <p>
                {this.props.children}
            </p>
            <input 
            type="text" 
            //ref = {(inputEl) => {this.inputElement =inputEl} }
            ref = {this.inputElementRef}
            onChange = {this.props.changed} 
            value={this.props.name}></input>
    
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