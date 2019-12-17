import React from 'react'
import "./Button.scss"

function Button({children, ...buttonProps}) {
    return (
        <button className="Button" {...buttonProps}>
            {children}
        </button>
    )
}

export default Button
