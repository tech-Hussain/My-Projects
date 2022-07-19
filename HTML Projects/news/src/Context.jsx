import React, { useContext, createContext, useReducer ,useEffect } from 'react'
import reducer from './reducer'
const ContextProvider = createContext()

const Context = ({ children }) => {
    const fetchApi=async()=>{
     const data=await fetch("https://hn.algolia.com/api/v1/search?query=react")
     const res=await data.json()
     dispatch({
        type:"Get_Data",
        extras:res
     })
    }
    const initialState={
        hits:[],
        page:0,
        nbPages:0,
        query:"react"
    }
    useEffect(()=>{
        fetchApi()
    },[])
    const [state, dispatch] = useReducer(reducer,initialState)
    return (
        <ContextProvider.Provider value={{...state}}>{children}</ContextProvider.Provider>
    )
}
const useGlobalContext = () => {
    return (
        useContext(ContextProvider)
    )
}
export { Context, useGlobalContext };