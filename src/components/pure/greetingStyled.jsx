import React, { useState } from 'react';

const loggedStyle = {
    color: 'green',
}

const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setlogged] = useState(true);

    const greetingUser = () => (<p>Hola, {props.name}, estas logueado</p>);
    const pleaseLogin = () => (<p>Please Login</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ?
                greetingUser()
            :
                pleaseLogin()
            }

            <button onClick={ () =>{
                console.log('Boton Clickeado...')
                setlogged(!logged)
            }}>
                Cambiar color a {logged ? 'rojo' : 'verde'}
            </button>
        </div>
    );
}

export default GreetingStyled;
