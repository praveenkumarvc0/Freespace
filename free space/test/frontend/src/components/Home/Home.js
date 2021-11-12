import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login'
import Register from '../Register/Register';
import '../Home/home.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
    return ( 
        <Router>
            <div className="home">
                <h1>FREE SPACE</h1>
    <div className="register">
    <button type="button"><a className="usechange" href="/register">Register</a>  </button> 
      </div>
      <div className="login">
      <button type="button"><a className="usechange" href="/login">login</a>  </button>
      </div>
      </div>
      </Router>


    );
}
