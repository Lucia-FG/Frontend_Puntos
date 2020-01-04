import React from 'react';
import Button from 'react-bootstrap/Button';

class NewConductor extends React.Component {
    constructor(props){
        super(props);
        this.state = {dni: '', nombre: '', apellido: ''};
        this.changeConductor = this.changeConductor.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changeConductor(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    
    clickAdd(){
      this.props.onAddConductor(this.state);
      this.setState({
          dni: '', nombre: '', apellido: ''
      });  
    }
    render(){
        return(
            <tr>
                <td><input className="form-control" name="dni" value={this.state.dni} onChange={this.changeConductor}/></td>
                <td><input className="form-control" name="nombre" value={this.state.nombre} onChange={this.changeConductor}/></td>
                <td><input className="form-control" name="apellido" value={this.state.apellido} onChange={this.changeConductor}/></td>
                <td></td>
                <td></td>
                <td><Button variant="success" onClick={this.clickAdd}>Añadir conductor</Button></td>
            </tr>
            
        );
    }
}

export default NewConductor;