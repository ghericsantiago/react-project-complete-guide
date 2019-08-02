import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {

    const toggleButtonRef = useRef();
    const context = useContext(AuthContext);

    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        toggleButtonRef.current.click();
    } )

    let assignedClasses = [ classes.red, classes.bold ];

    return (
        <div className={ classes.Cockpit } >
            <h1>{ props.title }</h1>
            <p className={ assignedClasses.join(' ') } >This is really working!</p>
            <button ref={ toggleButtonRef } onClick={ () => props.clicked()  } >
                Toogle Person
            </button>
            <button onClick={ context.login }>Login</button>
        </div>
    );
}
 
export default Cockpit;