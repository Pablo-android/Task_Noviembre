import React from 'react';

/* Este componente ingresa el titulo de la pagina, así como también
    ingresa la cantidad de tareas pendientes */
export const Baner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName}'s Tareas 
         ({props.taskItems.filter(t => !t.done).length} tareas por hacer)
    </h4>
)