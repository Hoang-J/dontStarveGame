import React, { useContext } from 'react'
import { SubmittedNameContext } from './Home'
import { isFormUpContext } from './LogIn'
import TypeWriter from './TypeWriter'


function Greeting1() {

    
    const [submittedName, setSubmittedName] = useContext(SubmittedNameContext)
    const [isFormUp, setIsFormUp] = useContext(isFormUpContext)
    
    function loggingOff(e) {
      setSubmittedName('')
      e.preventDefault()
      window.location.reload()
    }
    
  return (
    <>
        <div>
            {!isFormUp && (
            <div>
              <h2>Welcome <TypeWriter text={submittedName}/></h2>
              <TypeWriter text={"This is Don't Starve."}/>
              
            </div>
            )}

          <button onClick={loggingOff}>Log Off</button>
        
        </div>
        
    </>
    
    
  )
}

export default Greeting1