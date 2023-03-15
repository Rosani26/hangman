import React from 'react'

function Word ({selectedWord, correctLetters}) {
  return (
    <div className="word">
        {selectedWord.split('').map( (letters, i) => {
            return(
                <span className="letter" key={i}>
                    {correctLetters.includes(letters) ? letters : ''}
                </span>            )
        })}
    </div>

  )
}

export default Word
