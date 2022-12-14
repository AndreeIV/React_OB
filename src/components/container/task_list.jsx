import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    // Instancia de la clase task
    const defaultTask1 = new Task( 'example1', 'Esto es una descripcion1', true, LEVELS.NORMAL );
    const defaultTask2 = new Task( 'example2', 'Esto es una descripcion2', false, LEVELS.URGENT );
    const defaultTask3 = new Task( 'example3', 'Esto es una descripcion3', false, LEVELS.BLOCKING );

    // Estado del componente
    const [tasks, settasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);

        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    function completeTask(task) {
        console.log('Tarea completada', task);
        const index = tasks.indexOf(task);

        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;

        // We update the state of the component and it will update the
        // Iteration of the tasks in order to show the task update
        settasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Tarea eliminada', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
    
        tempTasks.splice(index, 1);
        settasks(tempTasks);
    }

    function addTask(task) {
        console.log('Tarea agragada', task);
        // const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
    
        tempTasks.push(task);
        settasks(tempTasks);
    }

    return (
        <div className='col-12'>
            {/* Card */}
            <div className='card'>
            
                {/* Card Header (tittle) */}
                <div className='card-header p-3'>
                    <h5>
                        Your tasks:
                    </h5>
                </div>

                {/* Card Body (content) */}
                <div className='card-body' data-mdb-perfect-crollbar='true' style={{height: '400px' }}>
                    <table style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            { tasks.map( (task, index) => {
                                
                                return (
                                    
                                    <TaskComponent
                                        key={index}
                                        task={task}
                                        complete={completeTask}
                                        deletes={deleteTask}
                                    >
                                    </TaskComponent>

                                );
                            })}

                        </tbody>
                    </table>
                </div>

                <TaskForm add={addTask}/>
                
            </div>
            
            {/* Aplicar un For/Map para renderizar una lista*/}

        </div>
    );
};


export default TaskListComponent;
