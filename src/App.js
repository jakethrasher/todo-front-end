import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './components/Header.js'
import SignUp from './AuthPages/SignUP.js';
import Login from './AuthPages/LogIn.js';
import TodoList from './TodoListpage/TodoList.js'
import HomePage from './HomePage.js';
import{ getToken } from './local-storage-utils.js'
import PrivateRoute from './components/PrivateRoute.js';


export default class App extends Component {
  state ={
    token:getToken(),
  }
  
  handleUserChange = (user) =>{
    this.setState({token: user.token})
    localStorage.setItem(`TOKEN`, JSON.stringify(user))
  }

    render() {
        return (
            <div>
                <Router>
                  <Header/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => 
                            <SignUp handleUserChange={this.handleUserChange} {...routerProps} />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) =>
                          <Login handleUserChange={this.handleUserChange}{...routerProps} />} 
                        />
                        <PrivateRoute
                          path="/todos" 
                          exact
                          token={this.state.token}
                          render={(routerProps) =>
                          <TodoList token={this.state.token}{...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}