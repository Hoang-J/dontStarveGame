import React, { useContext } from 'react'
import { NameContext } from './Home'
import TypeWriter from './TypeWriter'

function Greeting1() {
    const name = useContext(NameContext)

  return (
    <>
    {/* <div>This is my Greeting to you, {name}</div */}
        <div>
            {name && (
            <h2>Welcome <TypeWriter text={name}/></h2> 
            )}
        
        </div>
    </>
    
    
  )
}

export default Greeting1