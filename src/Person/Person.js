import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = ( props ) => {
    let styles = {

        "@media (min-width: 500px)": {
            width: '450px'
        }

    }
    return (
        <div className="Person" style={styles}>
            <p>I'm { props.name } and I am { props.age } years old.</p>
            <p>{ props.children }</p>
            <input value={ props.name } onChange={ props.changed }></input>
            <button onClick={ props.click }>Delete</button>
        </div>
    )
}

export default Radium(Person);