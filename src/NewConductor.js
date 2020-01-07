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
        this.clickAdd = this.clickAdd.bind(this);

    }
    
   /* clickAdd(){
       
        let dni = document
                      .getElementById('dni')
                      .value;
       
        PuntosApi.postPuntos(dni)
        .then(
            (data) => {

                this.setState({
                    errorInfo:"Registro añadido correctamente"
                })

                function reload() {
                    document.location.reload();
                }
                  
                setTimeout(reload, 1000);     

            },
            (error) => {
                this.setState({
                    errorInfo: "Ha habido un problema con el servidor"
                })
            }
        )
    }*/
    /*changeConductor(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }*/

    clickAdd() {

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



                <td align="center"><Button variant="success" onClick={this.clickAdd}>Añadir </Button></td>

            </tr>
            
        );
    }
}

export default NewConductor;