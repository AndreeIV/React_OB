// import logo from './logo.svg';
import './App.css';
// import GreetingStyled from './components/pure/greetingStyled';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import Ejemplo4 from './hooks/ejemplo4';
// import Ejemplo5 from './hooks/ejemplo5';
// import { Coche } from './models/coche.class';
// import TaskListComponent from './components/container/task_list';
// import TaskForm from './components/pure/forms/taskForm';
import OptionalRender from './components/pure/optionalRender';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import Greetings from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import Father from "./components/container/father";


function App() {


  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* Componente propio Greeting.jsx*/}
        {/* <Greetings name={'Andree'}></Greetings> */}

        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name='Andree'></GreetingF> */}

        {/* Componente de listado de tareas */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Martin'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <Ejemplo5 coche={cocheDefault}></Ejemplo5> */}
        {/* <GreetingStyled name="Andree"></GreetingStyled> */}
        {/* </header> */}

        {/* Gestión de eventos */}
        {/* <Father></Father> */}

        {/* Ejemplos de Renderizado condicional */}
        <OptionalRender></OptionalRender>
        
        {/* PROYECTO FINAL */}
        {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
