import React from 'react'
import videop from '../../assets/video.mp4'

const Main = () => {
  return (
    <div className="video"> 
    <div className="overlay"></div>
       <video src={ videop } autoPlay loop muted /> 
     <div className="content">
       <h1>Welcome My Portfolio</h1> 
       <h2>I'am Maximiliano Knutti</h2>
     </div>
    </div>
  )
}

export default Main