import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';  
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;
