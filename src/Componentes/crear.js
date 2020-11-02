import React, { useState } from "react";


export const Crear = props => {

    /* Se ingresa el nombre de la nueva tarea */
    const [nuevTareaNombre, setNuevTareaNombre] = useState('');

    /* Actualizar el valor de la nueva tarea */
    const updateNuevTareValue = e => setNuevTareaNombre(e.target.value);

    /* Se crea la nueva tarea */
    const crearNuevTarea = () => {
        props.callback(nuevTareaNombre);
       setNuevTareaNombre('');  
    }

    return (
        <div className="from-group">
            <input 
                type="text"
                className="form-control"
                value={nuevTareaNombre}
                placeholder="Nombre de la tarea"
                onChange={updateNuevTareValue}
                
            />
            <br></br>
            <textarea 
                placeholder="Descripción de la tarea"
            />
            <div className="input-group mb3">
                <div className="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Prioridad</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option>--Selecciona una--</option>
                    <option>Baja</option>
                    <option>Media</option>
                    <option>Alta</option>
                </select>
            </div>
            <button 
                className="btn btn-primary mt-1" 
                onClick={crearNuevTarea}  >
                Nueva tarea
            </button>
        </div>
    )
}