import './SearchBar.css'
import {useState} from 'react'
import {randomImage, userP} from '../api'

function SearchBar({onSub,random}){
    const [term,setTerm] = useState('')

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        onSub(term)
    }
    const handleChange =(event)=>{
        setTerm(event.target.value)
    }

    const handleClick = async()=>{
        // event.preventDefault()
        const response = await randomImage(term)
        //this random variable will send the data to parent prop or function
        return random(response)
    }

    // trying to run
    const handleauth=async()=>{
        // console.log(userP())
        const fu = await userP()
        return fu;

    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Search term:- </label>
                <input value={term} onChange={handleChange}></input>
                <button className='buttonIm' onClick={handleClick}>Random image</button>
                <button className='buttonIm' onClick={handleauth}>userP</button>
            </form>
        </div>
    )
}

export default SearchBar;