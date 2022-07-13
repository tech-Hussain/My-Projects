import React, { useState } from 'react';
import Item  from './Item.jsx';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(72, 206, 255)"
      },
      secondary: {
        main: "rgb(255, 255, 255)"
      }
    }
  });
const App=()=>{
 const [curr,update]=useState("")
 const [Dataarr,add]=useState([])
 const input=(event)=>{
  update(event.target.value)
 }
 const store=(event)=>{
  update((prev)=>{
    if (prev!=="") {
      add([...Dataarr,prev])
    }
    return ""
  })
 }
 const AddItems=()=>{
  return (Dataarr.map((elem,index)=>{
      return <Item text={elem} key={index} func={()=>{Delete(index)}}/>
   }))
 }
 function Delete(index){
  Dataarr.splice(index,1)
  add([...Dataarr])
 }
 return(
    <>
    <ThemeProvider theme={theme}>
        <section className='first'>
            <h1>ToDo List</h1>
            <div className='container'>
        <TextField id="input-with-sx" className='auto' label="Add an Item" variant="standard" value={curr} onChange={input}/>
            <IconButton onClick={store} style={{backgroundColor:"rgb(72, 206, 255)"}}><AddIcon sx={{ color: 'white'}} /></IconButton>
            </div>
        <div className='Data-container'>
        {AddItems()}
        </div>
        </section>
        </ThemeProvider>
    </>
 )
}
export default App