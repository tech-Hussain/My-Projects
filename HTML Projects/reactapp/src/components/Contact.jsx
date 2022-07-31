import React from 'react'
import { PhoneIphone, LocationCity, Email } from "@mui/icons-material"
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
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
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      msg: '',
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values)
      resetForm({values:""})
    },
  });
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
      <div className='myMsg'>
        <h3>Get in Touch</h3>
        <form onSubmit={formik.handleSubmit} method="POST" className='myMsgDiv'>
        <input
         id="name"
         name="name"
         type="text"
         spellCheck="false"
         placeholder='Your Name'
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <input
         id="email"
         name="email"
         type="email"
         spellCheck="false"
         placeholder='Your Email'
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <input
         id="phone"
         name="phone"
         type="number"
         spellCheck="false"
         placeholder='Your Phone Number'
         onChange={formik.handleChange}
         value={formik.values.phone}
       />
       <textarea
         id="msg"
         name="msg"
         spellCheck="false"
         placeholder='Message'
         onChange={formik.handleChange}
         value={formik.values.msg}
       />
       <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact