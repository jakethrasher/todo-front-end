import React, { Component } from 'react'
import { loginUser } from '../api-utils.js'
export default class LogIn extends Component {
    state = {
        email:'',
        password:'',
    }
    
    handleEmailChange = (e) =>{
        this.setState({email:e.target.value})
    }
    handlePasswordChange = (e) =>{
        this.setState({password:e.target.value})
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const user = await loginUser(this.state.email, this.state.password)
        
        this.props.handleUserChange(user.token);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="text" onChange={this.handleEmailChange} value={this.state.email}/>
                    </label>
                    <label>
                        Password
                        <input type="text" onChange={this.handlePasswordChange} value={this.state.password}/>
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
