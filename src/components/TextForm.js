import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Upparcase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick=()=>{
    //console.log("Upparcase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
  }
  const handleClearClick=()=>{
    //console.log("Upparcase was clicked"+text);
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared","success");
  }

  const handleOnChange=(event)=>{
   // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy =()=>{
    console.log("I am Copy");
    var text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extar spaces removed","success");
  }

  const [text,setText]=useState('');

  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control"  value={text} onChange={handleOnChange} 
   style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} 
   id="myBox" rows="8">
   </textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upparcase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
<button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
<button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008*text.split("").length}Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
