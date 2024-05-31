import React from 'react'
import './Home.css'
import chester from '../../Images/chester-run.gif'

function Home() {
  return (
    <>
      <div className="main">
        <h2 className="home-title">Don't Starve</h2>
        <p className="home-description">Play a game, check out the characters and dishes, and shop!</p>
        <img className="chester" src={chester} alt=''></img>
        <p className="art-credit">Disclaimer: All artwork are from Klei Entertainment's Don't Starve. Support their game <a className="art-credit-link" href="https://www.klei.com/games/dont-starve">here!</a></p>
      </div>
    </>
  )
}

export default Home