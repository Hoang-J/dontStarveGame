import React from 'react'
import './Home.css'
import chester from '../../Images/chester-run.gif'

function Home() {
  return (
    <>
      <div className="main">
        <h2 className="home-title">Don't Starve</h2>
        <p className="home-description"></p>
        <img className="chester" src={chester}></img>
      </div>
    </>
    
    
  )
}

export default Home