import React from 'react';
import Button from 'react-bootstrap/Button';

function Conductor(props){
    return(
    <tr>
        <td>{props.conductor.dni}</td>
        <td>{props.conductor.nombre}</td>
        <td>{props.conductor.apellido}</td>
        <td>{props.conductor.puntos}</td>
        <td>{props.conductor.multas}</td>
        <td>
            <Button variant="danger" onClick={() => props.onDelete(props.conductor)}>Eliminar conductor</Button>
        </td>
        <td>
            <button className="btn btn-primary" onClick={() => props.onEdit(props.conductor)}>Recuperar puntos</button>
        </td>
        <td>
            <button className="btn btn-primary">Ver multas</button>
        </td>
    </tr>
    );
}

export default Conductor;