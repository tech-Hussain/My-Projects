import React from 'react'
import { Context } from './Context'
import Stories from './Stories'
import Pagination from './Pagination'
import Search from './Search'
const App = () => {
  return (
    <Context>
    <Search/>
    <Stories/>
    <Pagination/>
    </Context>
  )
}

export default App