import React, {useState}  from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success")
    }

    const handleLowClick = ()=>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted To Lowercase", "success")

  }

  
  const handleRemovePunctuationClick = ()=>{
    console.log("Remove Punctuation was clicked" + text);
    let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    setText(newText)
    props.showAlert("Punctuation Removed", "success")

}

const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert("Text Copied To ClipBoard", "success")


}

const clearTextOnClick = ()=>{
    setText('')
    props.showAlert("Text Cleared", "success")

}
  


    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);

    }
    
    const[text, setText] = useState(" ")
  return (
<>
 <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode ==='dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
   </div>
   <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to Uppercase</button>
   <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
   <button className='btn btn-primary mx-2' onClick={handleRemovePunctuationClick}>Remove Punctuation</button>
   <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
   <button className='btn btn-primary mx-2' onClick={clearTextOnClick}>Clear Text</button>


 </div>

 
 <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h1>Preview</h1>
    <p>{text.length>0?text:"Enter Something in the text box to preview it here"}</p>

 </div>
 </>
  )
}
