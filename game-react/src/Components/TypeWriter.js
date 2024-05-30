import React, { useState, useEffect } from 'react'

function TypeWriter({text}) {

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(currentIndex < text.length) {
           setTimeout(() => {
               setCurrentText(previousTextChar => previousTextChar + text[currentIndex])
               setCurrentIndex(previousCharIndex => previousCharIndex + 1)
            }, 100) 
           
        }
    }, [currentIndex, text])

  return ( 
    <>
        <span>{currentText}</span>   
    </>
    
  )
}

export default TypeWriter