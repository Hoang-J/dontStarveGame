import React from 'react'

function LogOut() {

  //this function should set state back to original state
  // function loggedOut(e){
  //   e.preventDefault()
  //   window.location.reload()
  // }

  function loggingOut() {
    
  }

  return (
    <button onClick={loggingOut}>LogOut</button>
  )
}

export default LogOut