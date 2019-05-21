import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {

  // Reserve Property
  state = {
    persons: [
      { id: 1, name: 'Gheric', age: 29 },
      { id: 2, name: 'Kath', age: 25 },
      { id: 3, name: 'Anne', age: 24 }
    ],
    showPersons: false,
    changeCounter: 0,
    isAuthenticated: false
  }

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
    })
  }


  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentWillUpdate(){
    console.log('[App.js] componentWillUpdate');
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

    this.setState( ( prevState, props ) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  deletePersonHandler = ( index ) => {
    this.setState({
      person: this.state.persons.splice( index, 1 )
    })
  }

  render() {

    let persons = this.state.showPersons && <Persons persons={ this.state.persons } clicked={ this.deletePersonHandler } changed={ this.switchNameHandler } auth={ this.state.isAuthenticated } />
    
    return (
      <div className={ classes.App }>
        <AuthContext.Provider value={{ authenticated: this.state.isAuthenticated, login: this.loginHandler }}>
          <Cockpit 
          title={ this.props.title } 
          clicked={ this.togglePersonHandler } />
          { persons }
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
