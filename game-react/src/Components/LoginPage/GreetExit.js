import React, { useContext } from 'react'
import { SubmittedNameContext } from './LoginScreen'
import { isFormUpContext } from './LogIn'
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import TypeWriter from '../TypeWriter'

function GreetExit() {

    // these are context from the child component
    const [submittedName, setSubmittedName] = useContext(SubmittedNameContext)
    const [isFormUp, setIsFormUp] = useContext(isFormUpContext)
    
    // setting up this history function from the react-router-dom package
    // allows us to use the existing route we set up and go to that path without reloading the entire page all over again
    const history = useHistory()

    function loggingOff() {
      // updating the state for submitted name which was passed down to this grandchild component from the parent componenet
      setSubmittedName('');
      // Accessing history instances (the "pages" the user has been to or all the components that were rendered the first time) and going to the one with the path "/home"
      history.push("/home")
    }
    
  return (
    <>
        <div className="greeting">
          {/* conditional rendering set up here where the input form from the child component has to go away first and then this grandchild component will appear */}
            {!isFormUp && (
            <div>
            {/* These texts are show in a typewriter effect */}
            {/* The context from the parent element was passed down to be used here as well */}
              <h1>Welcome <TypeWriter text={submittedName}/></h1>
              <h4><TypeWriter text={"Hope you enjoy your visit to this Don't Starve website."}/></h4>
              
            </div>
            )}
            {/* when user clicks on this button, will return user back to the home page which is done by the useHistory hook */}
          <Button className="log-off-button" variant="secondary" size="lg" onClick={loggingOff}>Log Off</Button>
        
        </div>
        
    </>
    
    
  )
}

export default GreetExit