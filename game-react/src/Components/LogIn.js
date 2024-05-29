import React, { useState, useContext } from 'react'
import { NameContext } from './Home'

import LogOut from './LogOut'

function LogIn() {
    const name = useContext(NameContext)
    
    //function to update the state

  return (
    <>
        <div>You are logged in {name}!</div>
        <p>Not your name?</p>
        
        <LogOut />
    </>
    
  )
}

export default LogIn