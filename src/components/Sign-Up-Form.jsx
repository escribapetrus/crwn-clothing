import React, { Component } from 'react';
import FormInput from "./Form-Input";
import Button from "./Button";

import {auth, createUserProfileDocument} from "../firebase/utils"

import "./Sign-Up-Form.scss"

class SignUpForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName: "",
             email: "",
             password: "",
             confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return
        } else {
           try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName});
                this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
           } catch(error){
            console.error(error)
           }
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="Sign-Up-Form">
                <h2>I do not have an account</h2>
                <span>Sign up with your emai and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>
                <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required/>
                <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>
                <Button type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUpForm
