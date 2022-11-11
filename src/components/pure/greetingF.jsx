import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = ( props ) => {
    // Brave introduccion a useState
    // const [ variable, método para utilizarla ] = useState(valor Inicial)
    const [age, setAge] = useState(18);

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>¡Hola! { props.name } desde componente funcional</h1>

            <p>Tu edad es de: { age }</p>

            <div>
                <button onClick={ birthday }>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
