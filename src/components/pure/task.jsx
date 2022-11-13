import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created Task');

        return () => {
            console.log(`Task: ${ task.name } is going to unmount`);
        };
    }, [task]);

    /**
     * function that returns badge
     * depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                )

            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            { task.level }
                        </span>
                    </h6>
                )
                
            case LEVELS.BLOCKING:
            return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        { task.level }
                    </span>
                </h6>
            )
            
            default:
                break;
        }
    }

    function taskIconCompleted() {
        if(task.completed) {
            return <i className='bi-toggle-on' style={{color: 'green'}}>COMPLETED</i>
        } else {
            return <i className='bi-toggle-off' style={{color: 'gray'}}>PENDING</i>
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                <span>
                    {taskIconCompleted()}
                    <i className='bi-trash' style={{color: 'tomato', fontWeight: 'bold'}}></i>
                </span>
            </td>


        </tr>

        // <div>
        //     <h2>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: {task.completed ? 'COMPLETED' : 'PENDING'}
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
