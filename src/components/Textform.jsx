//usestate , props , changehadler , event ko handle kara 

import React,{useState} from 'react'

 
function Textform(props) {
    const Upercase2 = () =>{
        
        setText( text.toUpperCase());
        //ye sahi tarika hai update karne ka
        props.showAlert("Convert to Uppercase" , "success");
        
    } 
    const Lowercase2 = () => {
      //ye ek arrow function hai syntax yaad karna padega
    
      setText(text.toLowerCase());
      props.showAlert("Convert to Lowercase" , "success");
    }
    const clear2 = () =>{
     
      let newtext = "";
      setText(newtext);
      props.showAlert("Clear The Text" , "success");
    }
    const handleCopy = () => {
      var ntext = document.getElementById("myBox");
      ntext.select();
        navigator.clipboard.writeText(ntext.value);
        props.showAlert("Copy To Clipboard" , "success");
      }
    
    const onChangehandeler = (event) => {
     console.log("on change is clicked");
     setText(event.target.value);
    
     //target is nothing its just a poperty of event
     //vlue is poperty of dom
    }
    const [text , setText] = useState("Enter text here");
    //text = "new text "  // not correct way;
    // setText("new text") ; //this is correct way;
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      {/* ye do bracket lage hai ek js likhne ke liye or dousra us mai object bane ke liye */}
        <h1 className='my-4'>{props.heading}</h1>
<div className="mb-3" >
 
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'rgb(75, 77, 105)':'white' , color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="5" onChange={onChangehandeler}></textarea>
  {/* onchangehandler matlab event ko hadle kara yaha per event hai text ka change hona */}
</div>
<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={Upercase2 } >Convert to upercase</button>
<button disabled={text.length === 0}  className='btn btn-primary mx-1 my-1' onClick={Lowercase2}>Convert to lowercase</button>
<button disabled={text.length === 0}  className='btn btn-primary mx-1 my-1' onClick={clear2}>Clear Text</button>
<button disabled={text.length === 0}  className='btn btn-primary mx-1 my-1' onClick= {handleCopy}>Copy Text</button>
 {/* btn-primary class bootstrap styling apply karege */}
    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 className='my-3'>Your text Summary</h2>
      <p>{text.split(/\s/).filter((element) =>{return element.length>0}).length } words and {text.length - text.split(" ").length + 1} characters</p>
      {/*ye ek regular expression hai jiska matlb ki ye split karega extra spaceses ko bhi or new line ko bhi  */}
      {/* actualy mai ek array hai jiske element separate hue hai by " " per in element mai " " khali element bhi hai unko remove karne ke liye ye arrow function banaya hai */}
      <p>Time to read this is {(text.split(" ").filter((element) =>{return element.length>0}).length )*30/120} sec.</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
    
  )
}
//variable camel case mai na likhu tu accha hai
export default Textform
