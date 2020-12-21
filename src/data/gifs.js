import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GiftImage from './giftImage';
import { useFecthGif } from './hooks/useFecthGif';

export const Gifs = ({listed,i}) => {
 


// const [images, setimages] = useState([]);
 
//  useEffect(
//     ()=>getGifs(listed).then(img=>{
//         const d=setTimeout(
//             ()=>{
//         console.log(img)
//         setimages(img)
//             },3000
//         );
//         return ()=>clearTimeout(d)
        
//     }
//    ) ,[]);
const {data,loading}=useFecthGif(listed);
console.log(data);

    return (
        <>
         <p className='animate__animated animate__flash'>{loading && 'loading'}</p>
         <hr/>
         <br/>
        <div className='otros animate__animated animate__bounce'>
           
            <h3>{i+1}.-  { listed}</h3>
            {data.map(imgs=>(
                <GiftImage key={ imgs.id } {...imgs}/>
            ))}
        </div>
        </>
        
    )
}
