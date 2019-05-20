import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  // Reserve Property
  state = {
    persons: [
      { id: 1, name: 'Gheric', age: 29 },
      { id: 2, name: 'Kath', age: 25 },
      { id: 3, name: 'Anne', age: 24 },
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  switchNameHandler = ( event, personId ) => {
    // console.log('was clicked');
    //  DONT DO THIS: this.state.persons[0].name = 'Hello';
    
    const persons = this.state.persons.map(( person ) => {
      if( person.id === personId ) {
        return { ...person, name: event.target.value };
      }
      return person;
    });

    this.setState({
      persons
    });
  }

  deletePersonHandler = ( index ) => {
    this.setState({
      person: this.state.persons.splice( index, 1 )
    })
  }

  render() {

    let persons = this.state.showPersons && this.state.persons.map( ( person, index ) => {
      return <Person 
        click={ () => this.deletePersonHandler(index) }
        name={ person.name } 
        age={ person.age } 
        changed={ ( event ) => this.switchNameHandler( event, person.id ) } 
        key={ `person-${ person.id }` } /> 
    })
    
    
    return (
      <div className={ classes.App }>
        <h1>Hi, Im a React App</h1>
        <p>This is really working!</p>
        <button 
        onClick={ this.togglePersonHandler  } >Toogle Person</button>
        { persons }
      </div>
    );

    // return React.createElement( 'div', { className: 'App' }, React.createElement('h1', null,  'Hi, I\'m a React App!!!') );
  }
}

export default App;



// FUNCTIONAL STATE 
// import React, { useState } from 'react';
// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Gheric', age: 29 },
//       { name: 'Kath', age: 25 }
//     ]
//   });

//   const switchNameHandler = () => {
//     // console.log('was clicked');
//     //  DONT DO THIS: this.state.persons[0].name = 'Hello';
//     setPersonsState({
//       persons: [
//         { name: 'Hello', age: 29 },
//         { name: 'Kath', age: 25 }
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={ switchNameHandler  } >Switch Name</button>
//       <Person name ={ personsState.persons[0].name } age={ personsState.persons[0].age } />
//     </div>
//   )
// }

// export default App;