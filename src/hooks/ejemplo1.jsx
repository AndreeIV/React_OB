import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre : 'Martin',
        email : 'martin@gmail.com'
    }

    // Queremos que el valorInicial y personaInicial sean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente.
    // const [nombreVariable, funcionParaCambiar] = useState(valorInicial);

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? función para cambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * @param {string} nombre
     */
    function actualizarPersona(nombre) {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h4>EMAIL: { persona.email }</h4>

            <button onClick={ incrementarContador }>Incrementar Contador</button>
            <button onClick={ actualizarPersona }>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
