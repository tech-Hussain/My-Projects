import React from 'react'
import Page from '@mui/material/Pagination';
import {useGlobalContext} from "./Context";

const Pagination = () => {
  const {nbPages,page,pageChange}=useGlobalContext()
  return (
     <Page className='page' page={page+1} onChange={pageChange} count={nbPages} />
  )
}

export default Pagination