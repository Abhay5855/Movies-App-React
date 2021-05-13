
import React from 'react'

function Input(props) {
    return (
        <div>

        <input placeholder="search movies"
        type="text"

        value={props.value}

        onChange={(e) => props.setSearchMovies(e.target.value)}
        
        
         />

       
            
        </div>
    )
}

export default Input
