import React from 'react';
import Button from 'react-bootstrap/Button';

function EditConductor(props){
    const handleChange = event => {
        props.onChange({...props.conductor, [event.target.name]: event.target.value})
    }
    return(

        <tr>
            <td align="center"><input className="form-control" name="dni"  value={props.conductor.dni} onChange={handleChange}/></td>
            <td>{props.conductor.puntos_actuales}</td>
            <td>{props.conductor.puntos_perdidos}</td>
            <td>{props.conductor.puntos_recuperados}</td>
            <td>{props.conductor.date}</td>

           
            <td align="center">
                <button className="btn btn-success" onClick={() => props.onSave(props.conductor)}>Guardar</button>
            </td>
            <td align="center">
            <button className="btn btn-danger" onClick={() => props.onCancel(props.conductor)}>Cancelar</button>
            </td>
        </tr>
    )
}

export default EditConductor;