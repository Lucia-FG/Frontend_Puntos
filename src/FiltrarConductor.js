import React from 'react';
import Button from 'react-bootstrap/Button';
import PuntosApi from './PuntosApi';
import Alert from './Alert.js';



class NewConductor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorInfo:null,
            dni: ''
        };
        this.clickFiltrar = this.clickFiltrar.bind(this);


    }
    
 
    /*changeConductor(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }*/


    clickFiltrar() {

        let dni = document.getElementById('dni').value;
        this.props.onAddConductor(dni);
        this.setState({
            dni: dni
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



                <td align="center"><Button variant="info" onClick={this.clickFiltrar}>Filtrar </Button></td>


            </tr>
            
        );
    }
}

export default NewConductor;