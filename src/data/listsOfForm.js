import React, { useState } from 'react'
import { Formu } from './Formu';
import { Gifs } from './gifs';

const ListsOfForm = () => {

    const [lists, setlists] = useState(['dog']);


    return (
    

        <div>
            <Formu setlists={setlists} />


        <ol>
           {lists.map((listed,i)=>(
            <Gifs key={listed} listed={listed} i={i} />
            )
            ) }
        </ol>
        </div>
    )
}

export default ListsOfForm
