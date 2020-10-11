import React from 'react'

export default function FormControl({ name, label, type = 'text' }) {

    const renderInputs = type => {
        switch (type) {
            case 'textarea':
                return (<textarea name={name}
                    rows="5" cols="33">
                </textarea>)
            default:
                return <input name={name} type={type} />
        }
    }

    return (
        <div className="form-control">
            <label>{label}</label>
            {renderInputs(type)}
        </div>
    )
}
