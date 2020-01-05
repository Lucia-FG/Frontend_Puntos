import React from 'react';
import PuntosApi from './PuntosApi';
import Conductor from './Conductor.js';
import NewConductor from './NewConductor.js'
//import EditConductor from './EditConductor.js';
import Alert from './Alert.js';

class Conductores extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errorInfo: null,
            conductores: [],
            isEditing: {}
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
    }

    componentDidMount() {
        PuntosApi.getAllPuntos()
            .then(
                (data) => {
                    this.setState({
                        conductores: data.result
                    })
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            )
    }


    render() {
      
        return(
            <div>
            <Alert message={this.state.errorInfo} onClose={this.handleCloseError} />

            <table id="dtBasicExample" className="table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <NewConductor onAddConductor={this.addConductor}/>

            <thead>
                <tr>
                    <th>DNI</th>
                    <th>Puntos actuales</th>
                    <th>Puntos perdidos</th>
                    <th>Puntos recuperados</th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>

            {this.state.conductores.map((conductor) => 
                
                <Conductor key={conductor.dni} conductor={conductor} 
                onDelete={this.handleDelete}/>

                
            )}
            </tbody>
            </table>
            </div>

        );
    }
    
    handleEdit(conductor){

        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [conductor.dni]: conductor}
        }));

        PuntosApi.putPuntos(conductor.dni)
            .then(
                (data) => {
                    this.setState(prevState => ({
                        conductores: prevState.conductores.filter((c) => c.dni !== conductor.dni)
                    }))
                   
                },
                (error) => {
                    this.setState({
                        errorInfo: "No se ha podido eliminar el registro"
                    })
                }
            )
    }
    

    handleCloseError(){
        this.setState({
            errorInfo: null
        });
    }

    handleDelete(conductor){

        PuntosApi.deletePuntos(conductor.dni)
            .then(
                (data) => {
                    this.setState(prevState => ({
                        conductores: prevState.conductores.filter((c) => c.dni !== conductor.dni)
                    }))
                    alert("Eliminado correctamente")
                   
                },
                (error) => {
                    this.setState({
                        errorInfo: "No se ha podido eliminar el registro"
                    })
                }
            )

        
        
    }

}

export default Conductores;