 import React, { Component }from 'react';
 import './TaskForm.css';
 export default class TaskForm extends Component{

    
    render(){
         
        return(
            
            <form onSubmit={this.onSubmit} className="box">
                <h1>Agregar tarea</h1>
                <input type="text" 
                    name ="title"
                    placeholder = "Escribe la tarea" 
                    onChange={this.onChange}
                    value = {this.state.title}/>
               
                <textarea 
                    name = "description"
                    placeholder="Escribe la descripcion"
                    onChange={this.onChange}
                    value ={this.state.description}/>
                <input type="submit" value="Agregar"/>
            </form>
        )
    }
    state = {
        title: '',
        description:''
    }
    onSubmit = e => {
        this.props.addTask(this.state.title,this.state.description)
        e.preventDefault();
    }
    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })

               
    }
   

 }