import React from 'react'
import "./Button.scss"

function Button({children, inverted, isGoogleSignIn, ...buttonProps}) {
    return (
        <button className={
            `${isGoogleSignIn && "google-sign-in"} 
            ${inverted && "inverted"} 
            Button`} 
            {...buttonProps}
        >
            {children}
        </button>
    )
}

export default Button
