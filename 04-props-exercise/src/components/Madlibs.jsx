import React from 'react'

export const Madlibs = ( {year, month, famousPerson, pluralNoun1, pluralNoun2} ) => {
  return (
    <div>
      <p>In {year}, president {famousPerson} declared the 4th Thursday of {month} as a national day of thanksgiing to celebrate {pluralNoun1} and {pluralNoun2}</p>
    </div>
  )
}
