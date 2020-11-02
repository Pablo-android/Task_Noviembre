import React, { useState, useEffect } from "react";
import { Row } from './Componentes/row.js';
import { Baner } from './Componentes/baner.js';
import { Crear } from "./Componentes/crear";
import { VerControl } from "./Componentes/verycontrol"


function App() {
  /* Aqui se define quien es el propietirario de las tareas */
  const [userName, setUserName] = useState("Pablo");
   /* A qui se definen tareas previstas */
  const [taskItems, setTaskItems] = useState([
    { name: "Tarea 1", prioridad:"baja", done: false },
    { name: "Tarea 3", prioridad:"baja", done: true },
    { name: "Tarea 2", prioridad:"baja", done: false },
    { name: "Tarea 4", prioridad:"baja", done: false },
  ]);

  const [showCompleto, setShowCompleto] = useState(true)

    /* Esta funcion genera una nueva tarea */
  const nuevaTarea = nuevaTarea => {
    if (!taskItems.find(t => t.name === nuevaTarea)) {
      setTaskItems([...taskItems, {name: nuevaTarea, done:false}])
    }
  }

  const toggleTask = task =>
  setTaskItems (taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} :t)))

  /* Esta es una funcion para terminar las tareas */
  const taskTableRows = (doneValue) => 
    taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
      <Row task={task} 
      key={task.name} 
      toggleTask={toggleTask} />
    ))
  
  /* Interfas para el cliente */
  return (
    <div>
      {/* El titulo de la pagina en la que se tiene la función de las tareas pendientes */}
      <Baner userName={userName} taskItems={taskItems} />
      {/* Crea las nuevas tareas y se llama a la función nuevaTarea */}
      <Crear callback={nuevaTarea} />
      <table className="table table-striped table bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descrpipción</th>
            <th>Prioridad</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {/* A qui se manda llamar las tareas que no se han realizado */}
          {taskTableRows(false)}
        </tbody>
      </table>

      <div className="bg-secundary-text-white text-center p-2">
        <VerControl 
          descripcion="Completadas"
          isChecked={showCompleto}
          callback={checked => setShowCompleto(checked)}
        />
      </div>

      {
        showCompleto && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Prioridad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        ) 
     }


    </div>
  );
}

export default App;
