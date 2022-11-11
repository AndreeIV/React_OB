import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    // Instancia de la clase task
    const defaultTask = new Task( 'example', 'Default description', false, LEVELS.NORMAL )

    // Estado del componente
    const [tasks, settasks] = useState(defaultTask);
    
    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')

        return () => {
            console.log('TaskList component is going to unmount...')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your tasks: 
            </div>

            {/* Aplicar un For/Map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>

        </div>
    );
};


export default TaskListComponent;
