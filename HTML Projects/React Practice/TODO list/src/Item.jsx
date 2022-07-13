import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
const Item=(props)=>{
    return(
    <>
    <div className="second">
    <IconButton onClick={props.func}><DeleteIcon sx={{ color: 'red'}} /></IconButton>
    <span className="Data">{props.text}</span>
    </div>
    </>
    )
}
export default Item