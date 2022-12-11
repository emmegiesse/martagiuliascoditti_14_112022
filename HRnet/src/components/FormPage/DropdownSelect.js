// import REACT
import React from 'react';

// function pour le selecteur avec props
// map des données dans <data> pour créer des options 

const Select = ({ id,label, setter, data }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} onChange={(e) => setter(e.target.value)} >
                {data.map(d => {
                    return (<option key={d.name} value={d.name}>{d.name}</option>);
                })}
            </select>
        </div>
    )
}

export default Select;