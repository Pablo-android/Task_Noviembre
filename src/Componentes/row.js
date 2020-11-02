import React from 'react';

/* Esta funcion genera la seleccion de las tareas */
export const Row = props => (
    <tr key={props.task.name}>
        <td>{props.task.name}</td>
        <td>
            <input 
                type="checkbox"    
                checked={props.task.done} 
                onChange={() => props.toggleTask(props.task)}
            />
        </td>
      </tr>
);