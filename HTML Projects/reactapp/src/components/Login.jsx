import React from 'react'
import { useFormik } from 'formik';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from "react-router-dom"
const Login = () => {
  const navigate=useNavigate()
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
       <label htmlFor="email"><PersonIcon/></label>
       <input
         id="email"
         name="email"
         type="email"
         placeholder='Your Email'
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       </div>
       <div className='inputs'>
       <label htmlFor="password"><LockIcon/></label>
       <input
         id="password"
         name="password"
         type="password"
         placeholder='Password'
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       </div>
       <button type="submit">Sign In</button>
       <p>Does not create a Account?<button className='linkbtn' onClick={()=>navigate("/register")}>Click to Register</button></p>
     </form>
    </div>
    </div>
  )
}

export default Login