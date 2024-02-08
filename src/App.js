import { useState } from 'react'
import SearchBar from './components/SearchBar.js';
import {searchImage,likeImg,dislikeImg} from './api.js'
import ImageList from './components/ImageList.js'

function App(){
    //useState initial value is empty array because it's storing array in it
    const [images,setImage]= useState([])
    const LikeById =async(id)=>{
        console.log('id is ' , id)
        const result = await likeImg(id)
        console.log('result of likeImg from api',result)
    }

    const DislikeById = async(id)=>{
        const result = await dislikeImg(id)
        console.log('id for disliking',id)
        console.log('result of clicking dislike button from api',result)

    }

    const handleSubmit=async (term)=>{

        // api
        const result = await searchImage(term)

        //result is setted for sending using component
        setImage(result)
    }

    //thsi is for random 
    const handleRandom = (response)=>{
        console.log('this is response of handleRandom in app.js',response)
        setImage([...images,response])
        // images.push(response)
        console.log({images})
    }

    return <div>
        <SearchBar onSub={handleSubmit} random={handleRandom}/>
        <ImageList imag={images} onLike={LikeById} onDislike={DislikeById} />
    </div>
}

export default App;