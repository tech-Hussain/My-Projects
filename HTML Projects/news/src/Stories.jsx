import React from 'react'
import {useGlobalContext} from "./Context";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const Stories = () => {
    const {hits,isLoading,nbHits,deletePost}=useGlobalContext()
    return (<>
        <div className='resAmount'><span>{nbHits.toLocaleString()}</span> results found</div>
        {isLoading ? <Box sx={{ width: '100%',marginTop:"4rem" }}><LinearProgress/></Box> :
        hits.map((elem)=>{
            return(
                (elem.title) ?
                <div className='stories' key={elem.objectID}>
                <h2>{elem.title}{isLoading}</h2>
                <div className='authData'><span>By <span className='rData'>{elem.author} </span><span>|</span><span className='rData'> {elem.num_comments}</span><span> Comments</span></span></div>
                <div className='action'>
                    <a href={elem.url} target="_">Read More</a>
                    <IconButton aria-label="delete" color='error' onClick={()=>deletePost(elem.objectID)}><DeleteIcon /></IconButton>
                </div>
                </div> : ""
            )
        }) }
    </>
      )
}

export default Stories