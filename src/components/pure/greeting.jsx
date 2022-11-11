import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 18
        }
    }

    render() {
        return (
            <div>
                <h1>¡Hola! { this.props.name}</h1>

                <p>Tu edad es de: { this.state.age}</p>

                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {

        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        )) 
    }
}

Greetings.propTypes = {
    name: PropTypes.string,
}

export default Greetings;
