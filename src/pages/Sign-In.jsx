import React from 'react'
import SignInForm from "../components/Sign-In-Form"
import SignUpForm from "../components/Sign-Up-Form"

import "./Sign-In.scss"

function SignIn() {
    return (
        <div className="Sign-In">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default SignIn
