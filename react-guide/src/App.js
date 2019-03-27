import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends Component {
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


  let persons = null;
  let btnClass = '';
  if (this.state.showPersons){
    
    persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <ErrorBoundary key={person.id}> <Person 
        name={person.name} 
        age={person.age}
        click={()=> this.deletePersonHandler(index)} 
        
        changed={(event) => this.nameChangeHandler(event, person.id)}
        
        /> </ErrorBoundary>
      })}
      </div>
        );
        btnClass = classes.Red;
      }

      const assignedClasses = [];
      if (this.state.persons.length <= 2){
        assignedClasses.push(classes.red);
      } 
      if (this.state.persons.length <= 1){
        assignedClasses.push(classes.bold);
      }



    return (
        <div className={classes.App}>
          <h1> Woah this is a React App </h1> 
          <p className = {assignedClasses.join(' ')}> Oh mannn this thing is a pretty good damn tutorial</p>
          <button 
          className={btnClass}
          onClick={this.togglePersonHandler} >Toggle Persons </button>
          {persons}
        </div> 
    );
 
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'man I\'m tired'), 'Hi Im a react app');
  }
}

export default App;
