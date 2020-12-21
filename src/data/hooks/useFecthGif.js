import React, { useEffect, useState } from 'react'
import { getGifs } from '../../helpers/getGifs';

export const useFecthGif = (listed) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    });


useEffect(
    ()=>{
        getGifs(listed).then(img=>{
            const a=setTimeout(()=>{
                setstate(
                        {
                            data:img,
                            loading:false
                        } 
                );
            },1000);
            return ()=>clearTimeout(a);
        })
    },[]
)
    return state;
 
}
