import React, { useContext, createContext, useReducer ,useEffect } from 'react'
import reducer from './reducer'
const ContextProvider = createContext()

const Context = ({ children }) => {
    const fetchApi=async(url)=>{
        const data=await fetch(url)
        const res=await data.json()
        dispatch({
        type:"Get_Data",
        extras:res
    })
}
    const initialState={
        isLoading:true,
        hits:[],
        page:0,
        nbPages:0,
        query:"",
        nbHits:0
    }
    const [state, dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        fetchApi(`https://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`)
    },[state.query,state.page])
    const onChange=(e)=>{
        dispatch({
            type:"change",
            extras:e.target.value
    })
    }
    const deletePost=(id)=>{
        const filter=state.hits.filter((elem)=>{
            return elem.objectID !== id
        })
        dispatch({type:"delete",extras:filter})
    }
    const pageChange=(event,value)=>{
        dispatch({type:"pagination",extras:value-1})
    }
    return (
        <ContextProvider.Provider value={{...state,onChange,deletePost,pageChange}}>{children}</ContextProvider.Provider>
    )
}
const useGlobalContext = () => {
    return (
        useContext(ContextProvider)
    )
}
export { Context, useGlobalContext };