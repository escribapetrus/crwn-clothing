import React from 'react'
import "./Button.scss"

function Button({children, isGoogleSignIn, ...buttonProps}) {
    return (
        <button className={`${isGoogleSignIn && "google-sign-in"} Button`} {...buttonProps}>
            {children}
        </button>
    )
}

export default Button
