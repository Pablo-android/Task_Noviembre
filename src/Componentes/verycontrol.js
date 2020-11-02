import React from 'react'

export const VerControl = props => {
    return (
        <div className="form-check">
            <input 
                type="checkbox"
                className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.callback(e.target.checked)}
            />
            <label htmlFor="form-checked-label">
                Tareas {props.descripcion} 
            </label>
        </div>
    )
}