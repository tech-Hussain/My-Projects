import React, { useState } from 'react';
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

 return(
    <>
    <ThemeProvider theme={theme}>
        <section>
            <h1>ToDo List</h1>
            <div className='container'>
        <TextField id="input-with-sx" label="Add an Item" variant="standard" />
            <IconButton style={{backgroundColor:"rgb(72, 206, 255)"}}><AddIcon sx={{ color: 'white'}} /></IconButton>
            </div>
        </section>
        </ThemeProvider>
    </>
 )
}
export default App