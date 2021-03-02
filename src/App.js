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

export default class App extends Component {
  state ={
    user:'',
  }

  handleUserChange = (user) =>{
    this.setState({user})
    localStorage.setItem(`USER`, JSON.stringify(user))
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
                            render={(routerProps) => <SignUp handleUserChange={this.handleUserChange} {...routerProps} />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) =>
                          <Login handleUserChange={this.handleUserChange}{...routerProps} />} 
                        />
                        <Route
                          path="/todos" 
                          exact
                          render={(routerProps) =>
                          <TodoList {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}