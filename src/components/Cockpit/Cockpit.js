import React from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {

    let assignedClasses = [ classes.red, classes.bold ];

    return (
        <div className={ classes.Cockpit } >
            <h1>{ props.title }</h1>
            <p className={ assignedClasses.join(' ') } >This is really working!</p>
            <button onClick={ () => props.clicked()  } >
                Toogle Person
            </button>
        </div>
    );
}
 
export default Cockpit;