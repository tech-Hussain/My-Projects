import React,{useRef} from 'react'
import { useFormik } from 'formik';
import {Person,Lock,Visibility,VisibilityOff,Email,Phone,AccountBalanceOutlined} from '@mui/icons-material';
import {useNavigate} from "react-router-dom"
import {ToastContainer,toast} from 'react-toastify';
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
  } else if (values.phone.toString().length !== 10) {
    errors.phone = `Must be 11 characters ${values.phone.toString().length}`;
  }
  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.cpassword !== values.password) {
    errors.cpassword = 'Password are not matched';
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
      console.log(formik);
      const {name,email,phone,profession,password}=values
      const options = {
        method: 'POST',
        body: JSON.stringify({name,email,phone,profession,password}),
        headers:{
          "Content-Type":"application/json"
        }
      };
      fetch('http://localhost:5000/register', options)
        .then(res=>res.json())
        .then(res=>{
          if (res==="Registered Successfully") {
            resetForm({values:""})
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
              navigate("/login")
            }, 2500);
          }
          else if(res==="Email already exist"){
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
        })
        .catch(err => console.error(err));
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
         onBlur={formik.handleBlur}
         value={formik.values.name}
       />
       </div>
       {formik.errors.name  && formik.touched.name ? <div className="errormsg">{formik.errors.name}</div> : null}
       <div className='inputs'>
       <label htmlFor="email"><Email/></label>
       <input
         id="email"
         name="email"
         type="email"
         spellCheck="false"
         placeholder='Your Email'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       </div>
       {formik.errors.email && formik.touched.email ? <div className="errormsg">{formik.errors.email}</div> : null}
       <div className='inputs'>
       <label htmlFor="phone"><Phone/></label>
       <input
         id="phone"
         name="phone"
         type="number"
         spellCheck="false"
         placeholder='Mobile Number'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.phone}
       />
       </div>
       {formik.errors.phone  && formik.touched.phone ? <div className="errormsg">{formik.errors.phone}</div> : null}
       <div className='inputs'>
       <label htmlFor="profession"><AccountBalanceOutlined/></label>
       <input
         id="profession"
         name="profession"
         type="text"
         spellCheck="false"
         placeholder='Your Profession'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.profession}
       />
       </div>
       {formik.errors.profession  && formik.touched.profession ? <div className="errormsg">{formik.errors.profession}</div> : null}
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
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       <ReactPasswordToggleIcon inputRef={inputRef1} showIcon={showIcon} hideIcon={hideIcon} style={{cursor:"pointer",width:"max-content"}}/>
       </div>
       {formik.errors.password  && formik.touched.password? <div className="errormsg">{formik.errors.password}</div> : null}
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
         onBlur={formik.handleBlur}
         value={formik.values.cpassword}
       />
       <ReactPasswordToggleIcon inputRef={inputRef} showIcon={showIcon} hideIcon={hideIcon} style={{cursor:"pointer",width:"max-content"}}/>
       </div>
       {formik.errors.cpassword  && formik.touched.cpassword ? <div className="errormsg">{formik.errors.cpassword}</div> : null}
       <button type="submit">Register</button>
       <ToastContainer/>
       <p>Already Registered?<button className='linkbtn' onClick={()=>navigate("/login")}>Click to Sign In</button></p>
     </form>
     <img src="img/register.png" alt="login" />
    </div>
    </div>
  )
}

export default Register