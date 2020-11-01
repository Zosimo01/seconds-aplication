import React from 'react'

const GiftImage = ({title,url}) => {


    return (
        <div className='nuevo animate__animated animate__backInDown'>
            <img src={url} />
    <p>{title }</p>
        </div>
    )
}

export default GiftImage
