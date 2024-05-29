import React, { useState, createContext } from 'react'
import Greeting1 from './Greeting1'

export const NameContext = createContext()

function Home() {

  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

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
      <h2>Hello there, what's your name?</h2>
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
      </form>
      
      {/* <div>
        {submittedName && (
        <h2>Welcome <TypeWriter text={submittedName}/></h2> 
        )}
        
      </div> */}
        {/* can I code it where the value from this component will be stored to use at a different route or route will always rerender and erase? */}
      {/* <NameContext.Provider value={submittedName}/> */}

      <NameContext.Provider value={submittedName}>
        <Greeting1 />
      </NameContext.Provider>

    </>

  )
}

export default Home