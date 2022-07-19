import React from 'react'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TextField from '@mui/material/TextField';
import { ThemeProvider,createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 0, 0)"
    },
    secondary: {
      main: "rgb(255, 255, 255)"
    }
  }
});
const Search = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className='search'>
    <h1>
        <span>News Website</span><NewspaperIcon className='newsIcon'/> 
    </h1>
    <div className='TextInput' >
        <TextField id="standard-basic" label="Search for Instant News" className='input' variant="standard" color='primary'/>
    </div>
    </div>
    </ThemeProvider>
  )
}

export default Search