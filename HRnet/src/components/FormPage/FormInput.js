// import REACT
import React from 'react';

// fonction avec les composantes Input du formulaire avec props 
// <label for="first-name">First Name</label>
// <input type="text" id="first-name" />

const Input = ({ id, label, type, setter}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={(e) => setter(e.target.value)}></input>
        </div>
    )
}

export default Input