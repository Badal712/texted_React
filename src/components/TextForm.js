import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');
    //text = "new text" //Wrong way to change the state
    //setText ("new text"); //Correct way to change the state
    const handleUpClick = ()=>{
      //console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert(" Your text converted to upper case sucessfully","success");
      document.title = 'editKar - UpperCase'
    }
    const handleLowClick = ()=>{
      let newLower = text.toLowerCase();
      setText(newLower);
      props.showAlert(" Your text converted to lower case sucessfully","success");
    }
    const handelOnChange = (event)=>{
      //console.log("Uppercase was clicked");
      setText(event.target.value);
    }
    const handleSpeakClick = ()=>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleInvClick = ()=>{
      let newText = "";
      for(let i = text.length-1; i >= 0; i--){
        newText += text[i];
      }
      setText(newText);
      props.showAlert(" Your text inverse sucessfully","success");
    }
    const handleCopyClick = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();  //remove selection mark
      props.showAlert(" Your text copied to clipboard","success");
    }
    const handleESClick = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" Extra spaces has been remove","success");
    }
    const handleClearClick = ()=>{
      setText("");
      props.showAlert(" Your page has been clear","danger");
    }
  return (
    <>
    <div className="container"  style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'dark'?'#212529':'white', color : props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpeakClick}>Speak</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleInvClick}>Inverse</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleESClick}>Extra Space</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>

      {/* Show how many words and characters */}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} {text.split(" ").length<=1?"word":"words"} and {text.length} characters</p>

      {/* Show how many time taken to read this paragraph  */}
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

      {/* Show the text preview */}
      <h2>Preview</h2>
      <p style={{textAlign: "justify"}}>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
