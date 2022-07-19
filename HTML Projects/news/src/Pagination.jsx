import React from 'react'
import Page from '@mui/material/Pagination';
import {useGlobalContext} from "./Context";

const Pagination = () => {
  const {nbPages}=useGlobalContext()
  return (
     <Page className='page' count={nbPages} />
  )
}

export default Pagination