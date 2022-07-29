import React from 'react'
import { PhoneIphone, LocationCity, Email } from "@mui/icons-material"
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const copy = (text) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to Clipboard", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  return (
    <div className='contactDiv'>
      <div className='myInfo'>
        <div className='myinfoDiv'>
          <span className='infoIcon'><PhoneIphone /></span>
          <span className='infoField'>Phone</span>
          <span className='infoData' onClick={() => copy("+92123456789")}>+92123456789</span>
          <ToastContainer/>
        </div>
        <div className='myinfoDiv'>
          <span className='infoIcon'><Email /></span>
          <span className='infoField'>Email</span>
          <span className='infoData' onClick={() => copy("hussain@tech.com")}>hussain@tech.com</span>
          <ToastContainer/>
        </div>
        <div className='myinfoDiv'>
          <span className='infoIcon'><LocationCity /></span>
          <span className='infoField'>Location</span>
          <span className='infoData' onClick={() => copy("Karachi, Sindh, Pakistan")}>Karachi, Sindh, Pakistan</span>
          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}

export default Contact