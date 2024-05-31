import React, { useState, createContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import LogIn from './LogIn'

// Creating context to send the inputted name from user to pass onto the child component for it to use it
// Didn't do it for this app but can pass it onto grandchild component for it to access if wanted to
export const NameContext = createContext()

// Creating context to be able to send over the state of the submitted name to the child and grandchild component
export const SubmittedNameContext = createContext()


function LoginScreen() {

  // Initiating and setting the state of different "variables"
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [show, setShow] = useState(true)

  // Function to close the modal that pops up on load
  // Added a conditional statement to make sure user will input a name in order to move on
  function handleClose() {
    if(name.length > 0){
      setShow(false)
    } else {
      // Provided an alert to pop up to notify user what they're doing wrong
      alert("Please Enter your Name!")
    }
    
  }

  // Function to update the name state into what the user typed into the modal
  function handleInputChange(e) {
    setName(e.target.value)
  }

  // Function to get what was stored in the name state and store it into the submitted name state so that the name can 
  // be used in the child and grandchild components and be displayed different ways
  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedName(name)
  }

  // Function to allow user to clear what they typed into the modal if they didn't want to use backspace
  function clearInput() {
    setName('')
  }

  return (
    <>
        {/* Modal for user to input their name of choice */}
        <Modal
        show={show}
        onHide={handleClose}
        // This prevents user from clicking the background to exit out of the modal
        // Forcing user to provide a name 
        backdrop="static"
        // Prevents user from pressing any random keys to exit out of modal
        // Another way to force user to provide a name
        keyboard={false}
        >

        {/* The modal component from React Bootstrap has a header which includes a title */}
        <Modal.Header>
          <Modal.Title>Hello, what is your name?</Modal.Title>
        </Modal.Header>

        {/* The modal component from React Bootstrap has a body which I included a form instead of the usual text*/}
        <Modal.Body>
          <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
          >

          </input> 

        {/* I put the footer inside the body to separate the buttons from the form box */}
        <Modal.Footer>
          <button type="submit" onClick={handleClose}>Confirm</button>
          <button onClick={clearInput}>Clear</button>
        </Modal.Footer>

          </form>
        </Modal.Body>

      </Modal>

      {/* This is conditional rendering where the condition of having a valid(not empty) submitted name 
      is met so the LogIn componenet is called to render and two contexts are passed onto this child level
      component */}
      {submittedName && 
      <SubmittedNameContext.Provider value={[submittedName, setSubmittedName]}>
        <NameContext.Provider value={[name, setName]}>
          <LogIn />
        </NameContext.Provider>
      </SubmittedNameContext.Provider>
      
      }

    </>

  )
}

export default LoginScreen