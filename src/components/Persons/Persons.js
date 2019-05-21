import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    state = {
        simple: 'test'
    };

    // getDerivedStateFromProps( props, state ){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps( props ){
    //     console.log('[Persons.js] componentWillReceiveProps', props );
    // }

    // componentWillUpdate() {
    //     console.log('[Persons.js] componentWillUpdate' );
    // }

    shouldComponentUpdate( nextProps, nextState ) {
        console.log( '[Persons.js] shouldComponentUpdate' );
        return true;
    }

    getSnapshotBeforeUpdate( prevProps, prevState ){
        return { message: 'Snapshot' };
    }

    componentDidUpdate( prevProps, prevState, snapshot ){
        console.log( '[Persons.js] componentDidUpdate', snapshot );
    }

    render() {
        let props = this.props;
        return props.persons.map(( person, index ) => {
            return <Person
                key={ person.id }
                name={ person.name }
                age={ person.age }
                click={ () => props.clicked( index ) }
                changed={ event => props.changed( event, person.id ) }
            />
        });
    }
}

export default Persons;