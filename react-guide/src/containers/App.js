import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
class App extends Component {


  constructor(props){

    super(props);
    console.log('[App.js] constructor');
    //can setup state here....
  }


  //use state with care 
  state = {
    persons: [
      {id: 'a' ,name: 'Doug', age: 68},
      {id: 'b', name: 'Byung', age: 69},
      {id: 'c', name: 'Chase', age: 70},
      {id: 'd', name: 'Isla', age: 71}
    ],
    otherState:'Some other state value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){

    console.log('[App.js] getDerivedStateFromPRops', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] Component did mount');
  }

  //Not used anymore from here on out fellas!
  switchNameHandler = (newName) => {

    this.setState( {
      persons: [
        {name: newName, age: 168},
        {name: 'Byung', age: 169},
        {name: 'Chase', age: 170},
        {name: 'Isla', age: 171}
      ]
    } )
    //console.log("clickyyy");
    // DO NOT DO THIS
    // DO NOT CHANGE STATE DIRECTLY!!!
    // this.state.persons[0].name = "Greg Gangster"
    // React changes any new updates to new states and props
  }

  nameChangeHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    //fml this is not supposed to be name -> it's supposed
    //to be value
    person.name = event.target.value;


    const persons = [...this.state.persons];
    persons[personIndex] = person;
    //const person = Object.assign({}, person)

    this.setState( {
      persons: persons
    } )
};

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler =(personIndex) =>{
    const persons = this.state.persons.slice()
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
render() {

  console.log('[App.js] render ')
  let persons = null;
  if (this.state.showPersons){
    
    persons = 
      <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
       />
        ;
       
      }

     



    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          {persons}
        </div> 
    );
 
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'man I\'m tired'), 'Hi Im a react app');
  }
}

export default App;
