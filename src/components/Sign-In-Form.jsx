import React, { Component } from 'react';
import FormInput from "./Form-Input";
import Button from "./Button";

import {signInWithGoogle} from '../firebase/utils'

import "./Sign-In-Form.scss";

export class SignInForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(e){
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({email: "", password: "", test:""})
    }

    render() {
        return (
            <div className="Sign-In-Form">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={this.handleChange} 
                        value={this.state.email}
                        required
                        label="email"/>
                    <FormInput 
                        type="password" 
                        id="password" 
                        name="password"
                        required
                        onChange={this.handleChange} 
                        value={this.state.password}
                        label="password"/>
                    <div className="buttons">
                        <Button type="submit">sign in</Button>
                        <Button isGoogleSignIn onClick={signInWithGoogle}>sign in with google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm
