import {useState} from 'react'
import './ImageShow.css'
import heart from '../img/heart.svg'

function ImageShow({image,onLike, onDislike}){
    const [click, setClick]=useState(1)
    const handleClick =()=>{
        if(click>=4)
        {
            setClick(click * 0 + 1)
        }else{

            setClick(click + 1)
        }
        onLike(image.id)
    }

    const handlebtn =()=>{
        setClick(click *0+ 1)
        //on dislike img
        onDislike(image.id)
    }

    return (
        <div className='card'>
            <img src={image.urls.small} alt={image.alt_description}></img>
            <img className='heart' src={heart} alt='heart' onClick={handleClick} style={{width:20 * click}}></img>
            <button className='dislike' id='dislikeBtn' onClick={handlebtn}>dislike</button>
        </div>
    )
}

export default ImageShow;