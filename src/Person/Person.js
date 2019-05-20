import React from 'react';
import './Person.css';

const Person = ( props ) => {
    return (
        <div className="Person">
            <p>I'm { props.name } and I am { props.age } years old.</p>
            <p>{ props.children }</p>
            <input value={ props.name } onChange={ props.changed }></input>
            <button onClick={ props.click }>Delete</button>
        </div>
    )
}

export default Person;