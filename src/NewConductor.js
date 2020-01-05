import React from 'react';
import Button from 'react-bootstrap/Button';
import PuntosApi from './PuntosApi';

class NewConductor extends React.Component {
    constructor(props){
        super(props);
        this.state = {dni: ''};
        this.clickAdd = this.clickAdd.bind(this);
    }
    
    clickAdd(){
        let dni = document
                      .getElementById('dni')
                      .value;
        alert(dni);
        PuntosApi.postPuntos(dni)
        .then(
            (data) => {

                alert("Añadido correctamente")

            },
            (error) => {
                this.setState({
                    errorInfo: "Problem with connection to server"
                })
            }
        )
    }
    render(){
        return(
            <tr>
                <td><input className="form-control" id= "dni" name="dni" /></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>


                <td align="center"><Button variant="success" onClick={this.clickAdd}>Añadir </Button></td>

            </tr>
            
        );
    }
}

export default NewConductor;