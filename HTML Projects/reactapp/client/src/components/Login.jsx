import React,{useRef} from 'react'
import { useFormik } from 'formik';
import {Email,Lock,Visibility,VisibilityOff} from '@mui/icons-material';
import {useNavigate} from "react-router-dom"
import ReactPasswordToggleIcon  from "react-password-toggle-icon";
const Login = () => {
  const navigate=useNavigate()
  let inputRef = useRef();
  const showIcon = () => <Visibility/>;
  const hideIcon = () => <VisibilityOff/>;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values)
      resetForm({values:""})
    },
  });
  return (
    <div className='mainLoginDiv'>
    <div className='loginDiv'>
      <img src="img/login.png" alt="login" />
      <form onSubmit={formik.handleSubmit} method="POST" className='form'>
      <h2>Sign In</h2>
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
       <label htmlFor="password"><Lock/></label>
       <input
         ref={inputRef}
         id="password"
         name="password"
         spellCheck="false"
         type="password"
         placeholder='Password'
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <ReactPasswordToggleIcon inputRef={inputRef} showIcon={showIcon} hideIcon={hideIcon} style={{cursor:"pointer",width:"max-content"}}/>
       </div>
       <button type="submit">Sign In</button>
       <p>Does not create a Account?<button className='linkbtn' onClick={()=>navigate("/register")}>Click to Register</button></p>
     </form>
    </div>
    </div>
  )
}

export default Login