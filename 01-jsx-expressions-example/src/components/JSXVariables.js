import React from 'react';

const name = 'Billie';
const cityName = "Los Angeles";
const stateName = "California";

const translate = (str) => {
  str=str.toLowerCase();

  // for words that start with a vowel:
  if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
      return str=str+"way";
  }

  // for words that start with one or more consonants
 else {
 //check for multiple consonants
     for (var i = 0; i<str.length; i++){
         if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1){
             var firstcons = str.slice(0, i);
             var middle = str.slice(i, str.length);
             str = middle+firstcons+"ay";
             break;}
          }
  return str;
  }
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h2>Do you know my friend {name}? </h2>
          <h1>She's from {cityName}, {stateName}</h1>
          <hr />
          <h3>Pig Latin translation: </h3>
            <h4>{translate(name)}</h4>
            <h4>{translate(cityName)}</h4>
            <h4>{translate(stateName)}</h4>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
