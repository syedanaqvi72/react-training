import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("uppercase was clicked");
  }
  const [text, setText]= useState('enter text here');  
  //text= 'new text';  wrong way to change the state
  // setText('newText'); correct way to change the state
  setText("kjhjhhggig"); 
  return (
    <div>
  <h1>{props.heading}  </h1> 
<div className ="mb-3">
  <label htmlfor="Write Here" className="form-label">Enter Your text Here </label>
  <textarea className="form-control" value={ - text} id="My Box" rows="11"></textarea>
</div>
    <button className = "btn btn-primary" onClick={handleUpClick}> Convert to upercase </button>
    </div>
  )
}

  

  