import React, { useState } from 'react'

export const Formu = ({ setlists }) => {

const [values, setvalues] = useState('')

const enter=(e)=>{
    e.preventDefault();
     if(values.trim().length>2){
        setlists(item=>[values,...item]);
        setvalues('')
    }
}

const changing=(e)=>{
    setvalues(e.target.value);

   
}
    return (
        <form onSubmit={enter}>
            <input 
            type='type'
            value={values}
            onChange={changing}
            placeholder='your search Poyuelito'
            />
        </form>
    )
}
