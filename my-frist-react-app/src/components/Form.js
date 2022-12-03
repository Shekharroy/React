import React, {useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState("Enter text here...");
    const handleOnChangeEvent = ((event) =>{
        setText(event.target.value);
    });
    const handleUpClick =(()=>{
       let  newText = text.toUpperCase();
       setText(newText);
    });

  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChangeEvent} id="myform" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick = {handleUpClick}>Change to UpperCase</button>
    </div>
  )
}

