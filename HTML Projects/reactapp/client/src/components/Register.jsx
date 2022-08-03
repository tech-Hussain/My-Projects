import React,{useRef} from 'react'
import { useFormik } from 'formik';
import {Person,Lock,Visibility,VisibilityOff,Email,Phone,AccountBalanceOutlined} from '@mui/icons-material';
import {useNavigate} from "react-router-dom"
import ReactPasswordToggleIcon  from "react-password-toggle-icon";
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.profession) {
    errors.profession = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5) {
    errors.password = 'Must be 6 characters atleast';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (values.phone.length !== 11 ) {
    errors.phone = 'Must be 11 characters';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  return errors;
};
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
    },validate,
    onSubmit: (values,{resetForm}) => {
      const {name,email,phone,profession,password}=values
      const options = {
        method: 'POST',
        body: JSON.stringify({name,email,phone,profession,password}),
        headers:{
          "Content-Type":"application/json"
        }
      };
      fetch('http://localhost:5000/register', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
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
       {formik.errors.name ? <div>{formik.errors.name}</div> : null}
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
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
       {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
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
       {formik.errors.profession ? <div>{formik.errors.profession}</div> : null}
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
       {formik.errors.password ? <div>{formik.errors.password}</div> : null}
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