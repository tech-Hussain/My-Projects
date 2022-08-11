import React,{ useEffect,useState} from 'react'
import { useNavigate} from "react-router-dom";
import ProfilePicGen from './ProfilePicGen';
const About = () => {
  let navigate = useNavigate();
  const [info, setinfo] = useState({})
  const checkLogin=async()=>{
    const options = {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
      }
    };
    const data=await fetch('http://localhost:5000/about', options)
    const UserInfo=await data.json()
    setinfo(UserInfo)
    if (!UserInfo) {
      navigate("/login")
    }
  }
  useEffect(() => {
    checkLogin()
  },[])
  return (
    <div className='mainAboutDiv'>
      <div className='aboutDiv'>
        <div className='picLinkSection'>
          <div className='img'>
            <img src={ProfilePicGen()} alt="profilePic" />
          </div>
          <div className='links'>
            <ul>
              <h3>Work Link</h3>
              <li><a href="https://www.facebook.com/syed.mohammad.7547031" target="_link">Facebook</a></li>
              <li><a href="https://twitter.com/SyedHus42362881" target="_link">Twitter</a></li>
              <li><a href="https://github.com/tech-Hussain" target="_link">Github</a></li>
            </ul>
          </div>
          <div className='skills'>
            <ul>
              <h3>Skills</h3>
              <li>MERN Developer</li>
              <li>Website Developer</li>
              <li>Adobe XD</li>
              <li>Python Devoloper</li>
            </ul>
          </div>
        </div>
        <div className='aboutInfoSection'>
          <div className='infoIntro'>
            <div>
              <h2>{info.name}</h2>
              <h3>{info.profession}</h3>
            </div>
            <div style={{ color: "gray", cursor: "pointer",}}>Edit Profile</div>
          </div>
          <div className='aboutIntro'>
            <h3>Your Info</h3>
            <div className='realInfo'>
              <p className='infoTitle'>User Id</p>
              <p className='infoData'>{info._id}</p>
              <p className='infoTitle'>Name</p>
              <p className='infoData'>{info.name}</p>
              <p className='infoTitle'>Email</p>
              <p className='infoData'>{info.email}</p>
              <p className='infoTitle'>Phone</p>
              <p className='infoData'>{info.phone}</p>
              <p className='infoTitle'>Profession</p>
              <p className='infoData'>{info.profession}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About