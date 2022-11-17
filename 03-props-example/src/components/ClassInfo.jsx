import React from 'react';


function ClassInfo(props) {

    console.log(props);

  return (
    <div className="main-container">
         <h1>{props.instructor}</h1> 
         <h2>{props.finalExamDate}</h2>
         <hr/>
    </div>
  );
}

export default ClassInfo;
