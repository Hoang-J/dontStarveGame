import React, { useContext } from 'react'
import { NameContext } from './Home'
import TypeWriter from './TypeWriter'


function Greeting1() {
    const name = useContext(NameContext)
    // const [changeName, setChangeName] = useState('')

    // function handleNameChange() {
      
    // }

    // function handleNameChange(e) {
    //   setName(e.target.value)
    // }
    

  return (
    <>
    {/* <div>This is my Greeting to you, {name}</div */}
        <div>
            {name && (
            <div>
              <h2>Welcome <TypeWriter text={name}/></h2>
              <h2>Please Confirm your name</h2>
              {/* <input 
              type="text"
              name="name"
              value={changeName}
              onChange={setName(handleNameChange())}
              onKeyUp={(e) => {
                if(e.key === "Enter") {
                  handleNameChange()
                } 
              }}
              >
            </input> */}
            </div>
            
            )}
          
        
        </div>
        
    </>
    
    
  )
}

export default Greeting1