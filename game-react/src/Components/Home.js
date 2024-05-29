import React, { useState, createContext } from 'react'
import Greeting1 from './Greeting1'
import NavBar from './NavBar'
import Modal from 'react-bootstrap/Modal'

export const NameContext = createContext()

function Home() {

  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [show, setShow] = useState(true)

  function handleClose() {
    setShow(() => false)
  }

  // function handleShow() {
  //   setShow(() => true) 
  // }

  function handleInputChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedName(name)
    setName('')
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
          >

          </input> 
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" onClick={handleClose}>Confirm</button>
          <button onClick={clearInput}>Clear</button>
        </Modal.Footer>

      </Modal>

      <NameContext.Provider value={submittedName}>
        <NavBar />
      </NameContext.Provider>

      {/* <h2>Hello there, what's your name?</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        >

        </input> 

        <button type="submit">Confirm</button>
        <button onClick={clearInput}>Clear</button>
      </form> */}
      
      {/* <div>
        {submittedName && (
        <h2>Welcome <TypeWriter text={submittedName}/></h2> 
        )}
        
      </div> */}
        {/* can I code it where the value from this component will be stored to use at a different route or route will always rerender and erase? */}
      {/* <NameContext.Provider value={submittedName}/> */}

      

    </>

  )
}

export default Home