import React from 'react'

let pluralNoun1 = "Apples"
let month = "November"
let year = "2022"
let famousPerson = "Stevie Wonder"
let pluralNoun2 = "Bananas"


export const Madlibs = ( ) => {

  return (
    <div>
      <h1>Madlibs</h1>
      <p>In {year}, president {famousPerson} declared the 4th Thursday of {month} as a national day of thanksgiing to celebrate {pluralNoun1} and {pluralNoun2}</p>
    </div>
    
  )
}
