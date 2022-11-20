import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, deletes }) => {

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
            );

        case LEVELS.URGENT:
            return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        { task.level }
                    </span>
                </h6>
            );
                
        case LEVELS.BLOCKING:
            return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        { task.level }
                    </span>
                </h6>
            );
            
        default:
            break;
        }
    }

    function taskIconCompleted() {
        if(task.completed) {
            return <i onClick={ () => complete(task) } className='bi-toggle-on task-action' style={{color: 'green'}}>COMPLETED</i>;
        } else {
            return <i onClick={ () => complete(task) } className='bi-toggle-off task-action' style={{color: 'gray'}}>PENDING</i>;
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
                    <i className='bi-trash task-action' onClick={ () => deletes(task) } style={{color: 'tomato', fontWeight: 'bold'}}></i>
                </span>
            </td>


        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    deletes: PropTypes.func.isRequired


};


export default TaskComponent;
