import React from 'react';
//import Button from 'react-bootstrap/Button';
//import PuntosApi from './PuntosApi'

function Conductor(props){

    

    return(
    <tr>
        <td>{props.conductor.dni}</td>
        <td>{props.conductor.puntos_actuales}</td>
        <td>{props.conductor.puntos_perdidos}</td>
        <td>{props.conductor.puntos_recuperados}</td>


        <td align="center">
            <button type="button" class="btn btn-danger" onClick={() => props.onDelete(props.conductor)}>Eliminar</button>
            
        </td>
        <td align="center">
            <button type="button" class="btn btn-info" >Modificar</button>
        </td>

    </tr>
    );
}

export default Conductor;