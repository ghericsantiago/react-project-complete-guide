import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }

    render() {
        let props = this.props;
        return (
            <Aux>
                { this.props.auth ? <p>Authenticated</p>: <p>Please Login</p> }
                <p>I'm { props.name } and I am { props.age } years old.</p>
                <p>{ props.children }</p>
                <input ref={ this.inputElementRef } value={ props.name } onChange={ props.changed }></input>
                <button onClick={ props.click }>Delete</button>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);