import React from 'react'
import "./Form-Input.scss"

function FormInput({handleChange, required, label, ...inputProps}) {
    return (
        <div className="Form-Input">
            <input className="form-input"
                onChange={handleChange}
                required={required} 
                {...inputProps}                
                />
            {label && 
                <label className={`${inputProps.value.length && "shrink"} form-input-label`}>
                    {label}
                </label>
            }
        </div>
    )
}

export default FormInput
