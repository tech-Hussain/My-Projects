import React from 'react'

const About = () => {
  return (
    <div className='mainAboutDiv'>
      <div className='aboutDiv'>
        <div className='picLinkSection'>
          <div className='img'>
            <img src="img/profile.jpg" alt="profilePic" />
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
              <h2>Syed Muhammad Hussain</h2>
              <h3>Web Developer & Designer</h3>
            </div>
            <div style={{ color: "grey", cursor: "pointer" }}>Edit Profile</div>
          </div>
          <div className='aboutIntro'>
            <h3>Your Info</h3>
            <div className='realInfo'>
              <p className='infoTitle'>User Id</p>
              <p className='infoData'>62c0a85d83e7b8f2d76e5346</p>
              <p className='infoTitle'>Name</p>
              <p className='infoData'>Syed Muhammad Hussain</p>
              <p className='infoTitle'>Email</p>
              <p className='infoData'>hussain@tech.com</p>
              <p className='infoTitle'>Phone</p>
              <p className='infoData'>987643215</p>
              <p className='infoTitle'>Profession</p>
              <p className='infoData'>Web Developer & Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About