import React, { Component } from 'react'
import { getTodos, createTodo } from '../api-utils'

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
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" onChange={this.handleInputChange} value={this.state.todo}/>
                    </label>
                    <button>Add</button>
                </form>
                <div>
                    {this.state.todoList.map(item=> 
                        <p key={item.id}>{item.todo}</p>
                    )}
                </div>
            </div>
        )
    }
}
