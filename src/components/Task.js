import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';


class Task extends Component{
    
    render(){
        const {task} = this.props;
        return (
            <form className="box">
                <section className="fondo">
             <p style={this.StyleCompleted()}>
             {task.id}
             <br></br>
            <h1>Titulo</h1>{task.title} 
            <br></br>
            <h1>Descripcion</h1>{task.description} 
            {task.done}-
            <input type ="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
            <br></br>
            <button  onClick={this.props.deleteTask.bind(this,task.id)}>
                X
            </button>
        </p>
            </section>

            </form>
            
        )
       
    }
    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'White',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
}
Task.protTypes = {
    task: PropTypes.object.isRequired
}
const btnDelete = {
    fontSize: '18px',
    background: 'blue',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    
}
export default Task;