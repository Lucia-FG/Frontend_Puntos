import React from 'react';
import PuntosApi from './PuntosApi';
import Conductor from './Conductor.js';
import NewConductor from './NewConductor.js'
import EditConductor from './EditConductor.js';
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
        this.addConductor = this.addConductor.bind(this);


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
            <Alert color ="success" message={this.state.errorInfo} onClose={this.handleCloseError} />

            <table id="dtBasicExample" className="table-striped table-bordered table-sm" cellspacing="0" width="100%">

            <thead>
                <tr align="center">
                    <th>DNI</th>
                    <th>Puntos actuales</th>
                    <th>Puntos perdidos</th>
                    <th>Puntos recuperados</th>
                    <th>Fecha creación</th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
            
            <NewConductor onAddConductor={this.addConductor}/>

            {this.state.conductores.map((conductor) => 
                ! this.state.isEditing[conductor.dni] ?
                <Conductor key={conductor.dni} conductor={conductor}
                onEdit={this.handleEdit} 
                onDelete={this.handleDelete}
                />
                :
                <EditConductor key={conductor.dni} conductor={this.state.isEditing[conductor.dni]} 
                    onCancel={this.handleCancel.bind(this, conductor.dni)}
                    onChange={this.handleChange.bind(this, conductor.dni)}
                    onSave={this.handleSave.bind(this, conductor.dni)}/>
                             
                
            )}
            </tbody>
            </table>
            </div>

        );
    }

comprobarDNI(dni) {
        var numero
        var letr
        var letra
        var expresion_regular_dni
       
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
       
        if(expresion_regular_dni.test (dni) == true){
           numero = dni.substr(0,dni.length-1);
           letr = dni.substr(dni.length-1,1);
           numero = numero % 23;
           letra='TRWAGMYFPDXBNJZSQVHLCKET';
           letra=letra.substring(numero,numero+1);
          if (letra!=letr.toUpperCase()) {
            return true;
           }
        }else{
            
           return false;
         }
      
    
}

    addConductor(dni) {  

        if(dni!==""){

            if(!this.comprobarDNI(dni)){

                this.setState({
                    errorInfo:"Formato de DNI no válido"
                })

            }else if(this.comprobarDNI(dni)){

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
            
    
                    return ({
                        errorInfo: 'El conductor ya existe'
                    });            
                    
                }

            }else{

            this.setState({
                errorInfo:"El campo DNI no puede estar vacío"
            })
        }

    }
    
    handleEdit(conductor){

        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [conductor.dni]: conductor}
        }));

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
                        conductores: prevState.conductores.filter((c) => c.dni !== conductor.dni),
                        errorInfo: "Registro eliminado correctamente"

                    }))
                    function reload() {
                        document.location.reload();
                      }
                      
                      setTimeout(reload, 1000);                   
                },
                (error) => {
                    this.setState({
                        errorInfo: "No se ha podido eliminar el registro"
                    })
                }
            )

        
        
    }

    

    handleCancel(dni, conductor) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[dni];
            return {
                isEditing: isEditing
            }
        })
    }

    handleChange(dni, conductor) {
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [dni]: conductor}
        }))
    }

    handleSave(dni, conductor) {  
        
        if(conductor.dni!==""){

            if(!this.comprobarDNI(conductor.dni)){

                this.setState({
                    errorInfo:"Formato de DNI no válido"
                })

            }else if(this.comprobarDNI(conductor.dni)){
         
        
                PuntosApi.putPuntos(dni,conductor.dni)
                .then(
                    (data) => {
                        this.setState(prevState => {
                            const isEditing = Object.assign({}, prevState.isEditing);
                            delete isEditing[dni];
                
                            if (dni !== conductor.dni) {
                                const conductores = prevState.conductores;
                                const pos = conductores.findIndex(c => c.dni === dni);
                                conductores[pos].dni=conductor.dni;
                                
                                return {
                                    //conductores: [...conductores.slice(pos), Object.assign({}, conductor), ...conductores.slice(pos+1)],
                                    conductores:conductores,
                                    isEditing: isEditing,
                                    errorInfo: "Registro modificado correctamente"

                                }
                            }
                
                            return {
                                errorInfo: "No se puede editar el dni ",
                            }
                
                        });
                
                    }
                )
            }
        }else{
            this.setState({
                errorInfo:"El campo DNI no puede estar vacío"
            })

        }
    }
}
export default Conductores;