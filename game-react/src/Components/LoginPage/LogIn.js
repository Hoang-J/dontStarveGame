import React, { useContext, createContext, useState } from 'react'
import { NameContext, SubmittedNameContext } from './LoginScreen'
import GreetExit from './GreetExit'

// exporting this context because the grandchild component will render based on this state
export const isFormUpContext = createContext()

function LogIn() {

  // these are context from the parent component
  const [submittedName, setSubmittedName] = useContext(SubmittedNameContext)
  const [name, setName] = useContext(NameContext)

  // this state dictates when the input form will show up and close away
  const [isFormUp, setIsFormUp] = useState(true)
    
  //function to update the state from a form element
  function handleInputChange(e) {
    setName(e.target.value)
  }
  // function to locally store the new name user inputted on this child componenet
  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedName(name)
  }

  // function to update the isFormUp state to false so that the conditions are met to hide the input box (conditional rendering)
  function hideInput() {
    setIsFormUp(false)
  }

  // function that is triggered by a button click, can clear the input so user don't have to use backspace if they didn't want to
  function clearInput() {
    setName('')
  }

  return (
    <>
        {/* will show the context from the parent component */}
        <div>Logged In: {submittedName}</div>
        
        {/* conditional rendering to hide the form once user clicks continue to load the grandchild component */}
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
        
        {/* providing the isFormUp state and its setter to the grandchild component */}
        <isFormUpContext.Provider value={[isFormUp, setIsFormUp]}>
          <GreetExit />
        </isFormUpContext.Provider>
        
    </>
    
  )
}

export default LogIn