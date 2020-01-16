import React from 'react';
//import Button from 'react-bootstrap/Button';
//import PuntosApi from './PuntosApi'

function Conductor(props){

    return(
    <tr align="center">
        <td>{props.conductor.dni}</td>
        <td>{props.conductor.birthday}</td>
        <td>{props.conductor.puntos_actuales}</td>
        <td>{props.conductor.puntos_perdidos}</td>
        <td>{props.conductor.puntos_recuperados}</td>
        <td>{props.conductor.date}</td>


        <td align="center">
            <button type="button" class="btn btn-danger" onClick={() => props.onDelete(props.conductor)}>Eliminar</button>
            
        </td>
        <td align="center">
            <button type="button" class="btn btn-info" onClick={() => props.onEdit(props.conductor)} >Modificar</button>
        </td>

    </tr>
    );
}

export default Conductor;