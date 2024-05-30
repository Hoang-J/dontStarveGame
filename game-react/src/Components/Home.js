import React, { useState, createContext } from 'react'
import Greeting1 from './Greeting1'
import Modal from 'react-bootstrap/Modal'
import LogIn from './LogIn'

export const NameContext = createContext()

export const SubmittedNameContext = createContext()


function Home() {

  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [show, setShow] = useState(true)

  function handleClose() {
    if(name.length > 0){
      setShow(false)
      // console.log(name)
    } else {
      alert("Please Enter your Name!")
    }
    
  }

  function handleInputChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedName(name)
  }

  function clearInput() {
    setName('')
  }

  return (
    <>
   
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onKeyUp={(e) => {
          if(e.key === "Enter") {
            handleClose()
          } 
        }}
        >
        <Modal.Header>
          <Modal.Title>Hello, what is your name?</Modal.Title>
        </Modal.Header>
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
        <Modal.Footer>
          <button type="submit" onClick={handleClose}>Confirm</button>
          <button onClick={clearInput}>Clear</button>
        </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>

      {submittedName && 
      <SubmittedNameContext.Provider value={[submittedName, setSubmittedName]}>
        <NameContext.Provider value={[name, setName]}>
          <LogIn />
        </NameContext.Provider>
        {/* <Greeting1 /> */}
      </SubmittedNameContext.Provider>
      
      }

    </>

  )
}

export default Home