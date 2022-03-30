import React from 'react'

const Search = (props) => {

    return(
    <div className='search-bar'>
        <input type='text' name='search' value={props.value} placeholder='Search...' onChange={props.onChange}> 
        </input>
        <button onClick={props.onSubmit}>Submit</button>
     </div>
    )
}

export default Search