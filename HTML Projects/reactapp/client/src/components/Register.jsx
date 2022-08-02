import React,{useRef} from 'react'
import { useFormik } from 'formik';
import {Person,Lock,Visibility,VisibilityOff,Email,Phone,AccountBalanceOutlined} from '@mui/icons-material';
import {useNavigate} from "react-router-dom"
import ReactPasswordToggleIcon  from "react-password-toggle-icon";
const Register = () => {
  const navigate=useNavigate()
  let inputRef = useRef();
  let inputRef1 = useRef();
  const showIcon = () => <Visibility/>;
  const hideIcon = () => <VisibilityOff/>;
  const formik = useFormik({
    initialValues: {
      name:"",
      email: '',
      phone:"",
      profession:"",
      password: '',
      cpassword: '',
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values)
      resetForm({values:""})
    },
  });
  return (
    <div className='mainregisterDiv'>
    <div className='registerDiv'>
      <form onSubmit={formik.handleSubmit} method="POST" className='form'>
      <h2>Register</h2>
      <div className='inputs'>
       <label htmlFor="name"><Person/></label>
       <input
         id="name"
         name="name"
         type="text"
         spellCheck="false"
         placeholder='Your Name'
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       </div>
       <div className='inputs'>
       <label htmlFor="email"><Email/></label>
       <input
         id="email"
         name="email"
         type="email"
         spellCheck="false"
         placeholder='Your Email'
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       </div>
       <div className='inputs'>
       <label htmlFor="phone"><Phone/></label>
       <input
         id="phone"
         name="phone"
         type="number"
         spellCheck="false"
         placeholder='Mobile Number'
         onChange={formik.handleChange}
         value={formik.values.phone}
       />
       </div>
       <div className='inputs'>
       <label htmlFor="profession"><AccountBalanceOutlined/></label>
       <input
         id="profession"
         name="profession"
         type="text"
         spellCheck="false"
         placeholder='Your Profession'
         onChange={formik.handleChange}
         value={formik.values.profession}
       />
       </div>
       <div className='inputs'>
       <label htmlFor="password"><Lock/></label>
       <input
         ref={inputRef1}
         id="password"
         name="password"
         spellCheck="false"
         type="password"
         placeholder='Password'
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <ReactPasswordToggleIcon inputRef={inputRef1} showIcon={showIcon} hideIcon={hideIcon} style={{cursor:"pointer",width:"max-content"}}/>
       </div>
       <div className='inputs'>
       <label htmlFor="cpassword"><Lock/></label>
       <input
         ref={inputRef}
         id="cpassword"
         name="cpassword"
         spellCheck="false"
         type="password"
         placeholder='Confirm Your Password'
         onChange={formik.handleChange}
         value={formik.values.cpassword}
       />
       <ReactPasswordToggleIcon inputRef={inputRef} showIcon={showIcon} hideIcon={hideIcon} style={{cursor:"pointer",width:"max-content"}}/>
       </div>
       <button type="submit">Register</button>
       <p>Already Registered?<button className='linkbtn' onClick={()=>navigate("/login")}>Click to Sign In</button></p>
     </form>
     <img src="img/register.png" alt="login" />
    </div>
    </div>
  )
}

export default Register