import React from 'react';
//import Conductor from './Conductor.js';
//import NewConductor from './NewConductor.js'
//import EditConductor from './EditConductor.js';
//import Alert from './Alert.js';
import PuntosApi from './PuntosApi'

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
            .then(result => this.setState({ 'conductores': result}))
            
    }

    render() {
        if(this.state.conductores==""){
        return (
            <p>error</p>
        )
        }else{
            let items=this.state.conductores.map((item,index) =>
                <li key={index}>
                    {item.dni}
                </li>                   
                );

        return <div><ul>{items}</ul></div>
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

    handleCancel(dni, conductor){
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[dni];
            return {
                isEditing: isEditing
            }
        })
    }

    handleDelete(conductor){
        this.setState(prevState => ({
            conductores: prevState.conductores.filter((c) => c.dni !== conductor.dni)
        }))
    }

    handleChange(dni, conductor){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [dni]: conductor}
        }))
    }

    handleSave(dni, conductor){
        this.setState(prevState =>{
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[dni];

            if (dni===conductor.dni){
                const conductores = prevState.conductores;
                const pos = conductores.findIndex(c => c.dni === conductor.dni);
                return {
                    conductores: [...conductores.slice(0,pos), Object.assign({}, conductor), ...conductores.slice(pos+1)],
                    isEditing: isEditing
                }
            }
 
            return{
                errorInfo: "Cannot edit name",
            }
        });
    }

    addConductor(conductor) {
        this.setState(prevState => {
            const conductores = prevState.conductores;
            if (!conductores.find(c => c.dni === conductor.dni)){
                return({
                    conductores: [...prevState.conductores, conductor] 
                });
            }
            return({
                errorInfo: ' Conductor ya existe'
            });
        });
    }

}

export default Conductores;