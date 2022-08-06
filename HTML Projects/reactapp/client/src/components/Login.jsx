import React, { useRef } from 'react'
import { useFormik } from 'formik';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import {ToastContainer,toast} from 'react-toastify';
const Login = () => {
  const navigate = useNavigate()
  let inputRef = useRef();
  const showIcon = () => <Visibility />;
  const hideIcon = () => <VisibilityOff />;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit:async (values, { resetForm }) => {
      const { email, password } = values
      const options = {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      };
      const data=await fetch('http://localhost:5000/login', options)
      const res=await data.json()
      if (res==="logged in Successfully") {
        resetForm({ values: "" })
        toast.success(res, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          navigate("/")
        }, 2500);
      }
      else if(res==="Invalid Credentials"){
        toast.error(res, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    },
  });
  return (
    <div className='mainLoginDiv'>
      <div className='loginDiv'>
        <img src="img/login.png" alt="login" />
        <form onSubmit={formik.handleSubmit} method="POST" className='form'>
          <h2>Sign In</h2>
          <div className='inputs'>
            <label htmlFor="email"><Email /></label>
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
            <label htmlFor="password"><Lock /></label>
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
            <ReactPasswordToggleIcon inputRef={inputRef} showIcon={showIcon} hideIcon={hideIcon} style={{ cursor: "pointer", width: "max-content" }} />
          </div>
          <button type="submit">Sign In</button>
          <ToastContainer/>
          <p>Does not create a Account?<button className='linkbtn' onClick={() => navigate("/register")}>Click to Register</button></p>
        </form>
      </div>
    </div>
  )
}

export default Login