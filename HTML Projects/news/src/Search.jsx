import React from 'react'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TextField from '@mui/material/TextField';

const Search = () => {
  return (
    <div className='search'>
    <h1>
        <span>News Website</span><NewspaperIcon className='newsIcon'/> 
    </h1>
        <TextField id="outlined-basic" label="Search for Instant News" variant="outlined" />
    
    </div>
  )
}

export default Search