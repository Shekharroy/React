import React, {useState} from 'react' // useState is Hook
// What is Hooks?
// Basically Hooks is used for supporting class features without making the class.
export default function Form(props) {
    const [text, setText] = useState("Enter text here..."); // Using useState Hook for changing the state;
    const handleOnChangeEvent = ((event) =>{
        setText(event.target.value);
    });
    const handleUpClick =(()=>{
       let  newText = text.toUpperCase();
       setText(newText);
    });
    const handleLowClick = (() =>{
        let  newText = text.toLowerCase();
        setText(newText);
    });

  return (
    <>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChangeEvent} id="myform" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Change to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLowClick}>Change to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

