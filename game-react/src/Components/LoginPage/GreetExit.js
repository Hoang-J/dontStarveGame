import React, { useContext } from 'react'
import { SubmittedNameContext } from './LoginScreen'
import { isFormUpContext } from './LogIn'
import TypeWriter from '../TypeWriter'
import { useHistory } from "react-router-dom"


function GreetExit() {

    
    const [submittedName, setSubmittedName] = useContext(SubmittedNameContext)
    const [isFormUp, setIsFormUp] = useContext(isFormUpContext)
    
    const history = useHistory()

    function loggingOff() {
      setSubmittedName('');
      history.push("/home")
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

export default GreetExit