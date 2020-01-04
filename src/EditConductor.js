import React from 'react';
import Button from 'react-bootstrap/Button';

function EditConductor(props){
    const handleChange = event => {
        props.onChange({...props.conductor, [event.target.name]: event.target.value})
    }
    return(
        <tr> 
            <td>{props.conductor.dni}</td>
            <td>{props.conductor.nombre}</td>
            <td>{props.conductor.apellido}</td>
            <td><input className="form-control" name="puntos" value={props.conductor.puntos} onChange={handleChange}/></td>
            <td>{props.conductor.multas}</td>
            <td>
                <Button  variant="outline-success" onClick={() => props.onSave(props.conductor)}>Grabar</Button>
                <Button  variant="outline-danger" onClick={() => props.onCancel(props.conductor)}>Cancelar</Button>
            </td>
            
        </tr>
    )
}

export default EditConductor;