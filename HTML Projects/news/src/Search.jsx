import React from 'react'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TextField from '@mui/material/TextField';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { useGlobalContext } from './Context';
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
  const {query,onChange}=useGlobalContext()
  return (
    <ThemeProvider theme={theme}>
    <div className='search'>
    <h1>
        <span>News Website</span><NewspaperIcon className='newsIcon'/> 
    </h1>
    <div className='TextInput' >
        <TextField id="standard-basic" label="Search for Instant News" className='input' variant="standard" color='primary' value={query} onChange={onChange} spellCheck="false"/>
    </div>
    </div>
    </ThemeProvider>
  )
}

export default Search