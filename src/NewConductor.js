import React from 'react';
import Button from 'react-bootstrap/Button';
import PuntosApi from './PuntosApi';
//import Alert from './Alert.js';

class NewConductor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorInfo:null,
            dni: ''
        };
        this.clickAdd = this.clickAdd.bind(this);
        this.clickFiltrar = this.clickFiltrar.bind(this);


    }

    clickAdd() {

        let dni = document.getElementById('dni').value;
        this.props.onAddConductor(this.state,dni);
        this.setState({
            dni:''
        });
        document.getElementById('dni').value=""

    }

    clickFiltrar() {

        let dni = document.getElementById('dni').value;
        this.props.onFiltrarConductor(dni);
        this.setState({
            dni: ''
        });

    }
    render(){
        
        return(            

            <tr>
                <td><input className="form-control"  id="dni" name="dni" Defaultvalue={this.state.dni} /></td>
                <td></td>
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