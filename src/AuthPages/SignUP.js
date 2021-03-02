import React, { Component } from 'react'
import { signUpUser } from '../api-utils.js'

export default class SignUP extends Component {
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
    const user = await signUpUser(this.state.email, this.state.password)

    this.props.handleUserChange(user);
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
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
