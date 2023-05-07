import React, {useState} from 'react'
export default function TextForm(props) {
  const [text, setText]= useState('enter text here'); 
  setText("kjhjhhggig"); 
  return (
    <div>
  <h1>{props.heading}  </h1> 
<div className ="mb-3">
  <label htmlfor="Write Here" className="form-label">Enter Your text Here </label>
  <textarea className="form-control" value={ - text} id="My Box" rows="11"></textarea>
</div>
    <button className = "btn btn-primary"> Convert to upercase </button>
    </div>
  )
}

  

  