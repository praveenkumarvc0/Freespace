import React, { Component } from 'react'
import { login } from './../UserFunctions/UserFunctions';
import {
   Card,
   Form,
   Button
  } from "react-bootstrap";

class Login extends Component {

    constructor() {
        super()
        this.state = {
          Firstname: '',
          Lastname:'',
          password: '',
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const user = {
          Firstname: this.state.Firstname,
          Lastname:this.state.Lastname,
          password: this.state.password
        }
    
        login(user).then(res => {
          if (res) {
            alert('Login Successfully');
            window.history.back();
          }
        }).catch((err,res)=> {
          res.status(400).json({err})
          window.location('/login')
          window.reload()
        })
      }

    render() {
        return (
            <div>
              
                <Card className="logincard">
                <h2>LOGIN</h2>
                <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" name="firstname" placeholder="Enter firstname" value={this.state.Firstname} onChange={this.onChange}/>
                <Form.Text className="text-muted">
              
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" name="lastname" placeholder="Enter lastname" value={this.state.Lastname} onChange={this.onChange}/>
                <Form.Text className="text-muted">
              
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                Submit
                </Button>
                </Form>
                <h6>Don't have a account? <span><a className="usechange" href="/register">Sign Up</a></span></h6>
                </Card>
            </div>
        )
    }
}

export default Login;
