import React from 'react'
import './About.css'


const About = () => {
  document.title = `About - NewsHub`
  return (
    <>
      <div className="about-section ">
        <h1 className='text-center'><u><span className="badge rounded-pill bg-danger" style={{marginTop:'90px' }}>Welcome to NewsHub</span></u></h1>
        <h3>About Us</h3>
        <p>We provide News belonging to different Categories like Business, Entertainment, General, Health, Science, Sports and Technology</p>
        <p>
          Uses News API to fetch and retrieve Data.
        </p>
      </div>
      <h2 style={{ textAlign: "center", paddingTop: "25px", paddingBottom: '25px' }}><span className="badge rounded-pill bg-danger">Our Team</span> </h2>

      <div className="card border-dark text-center my-3" style={{ borderWidth: '3px', width: '20rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h2><b>Deepali Kumble</b></h2>
          <h5 className="card-title">NewsHub App</h5>
          <p className="card-text">
            Contact:deepalikumble@gmail.com
          </p>
        </div>
      </div>



      {/* <div className="row">
          <div className="column">
            <div className="card text-center">
              <img src="/w3images/team1.jpg" alt="Deepali" style={{ width: "100%" }} />
              
                <h2>Deepali Kumble</h2>
                <p className="title">NewsHub App</p>
                <p>React app</p>
                <p>deepalikumble@gmail.com</p>
              
            </div>
          </div>
        </div> */}



    </>
  )

}

export default About
