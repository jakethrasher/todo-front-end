import React, { Component } from 'react'
import { getTodos, createTodo, completeTodo } from '../api-utils'
import './TodoList.css'
export default class TodoList extends Component {
    state = {
        todoList:[],
        todo:'',
    }
    fetchTodos = async ()=>{
        const todos = await getTodos(this.props.token);
        this.setState({todoList:todos})
    }
    componentDidMount = async()=>{
       await this.fetchTodos()
    }
    handleInputChange = (e)=>{
        this.setState({todo: e.target.value})
    }
    handleSubmit = async(e)=>{
        e.preventDefault();

        await createTodo(this.state.todo, this.props.token)
        await this.fetchTodos()

        this.setState({todo:''})
    }
    handleComplete = async(id)=>{
        await completeTodo(id, this.props.token);

        this.fetchTodos();
    }
    render() {
        
        return (
            <div>
                <h3>Make a todo list and select the item when completed</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" onChange={this.handleInputChange} value={this.state.todo}/>
                    </label>
                    <button>Add</button>
                </form>
                <div>
                    {this.state.todoList.map(item=> 
                        <p onClick={()=>this.handleComplete(item.id)} key={item.id} className={item.completed ? "completed-todo" : "todo"}>{item.todo}</p>
                    )}
                </div>
            </div>
        )
    }
}
