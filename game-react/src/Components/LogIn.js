import React, { useContext, createContext, useState } from 'react'
import { NameContext, SubmittedNameContext } from './Home'
import LogOut from './LogOut'
import Greeting1 from './Greeting1'

export const isFormUpContext = createContext()

function LogIn() {

  // const name = useContext(NameContext)

  const [submittedName, setSubmittedName] = useContext(SubmittedNameContext)
  const [name, setName] = useContext(NameContext)

  const [isFormUp, setIsFormUp] = useState(true)
    
  //function to update the state from a form element
  function handleInputChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedName(name)
  }

  function hideInput() {
    setIsFormUp(false)
  }

  function clearInput() {
    setName('')
  }

  return (
    <>
        <div>Logged In: {submittedName}</div>
        
      
        {isFormUp && 
          <>
          <p>Please confirm your name:</p>
          <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
          />
          
          <button type="submit">Confirm</button>
          <button onClick={clearInput}>Clear</button>
          </form>
          
          <button onClick={hideInput}>Continue</button>
          </>
        }
        
        <isFormUpContext.Provider value={[isFormUp, setIsFormUp]}>
          <Greeting1 />
        </isFormUpContext.Provider>
        
    </>
    
  )
}

export default LogIn