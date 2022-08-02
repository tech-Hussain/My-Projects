import React from 'react'
import {useNavigate} from "react-router-dom"
const Error = () => {
  const navigate=useNavigate()
  return (
    <div className='error'>
    <div>
    <h1>404 Error</h1>
    <h2>We are sorry,page not found!</h2>
    <p>the page you are looking for might have been removed had its name changed or its temporarily unavailable.</p>
    <button onClick={()=>navigate("/")}>Back to HomePage</button>
    </div>
    </div>
  )
}

export default Error