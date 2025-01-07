
import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes ,
  Route,
 
  Link
} from "react-router-dom";

// The Switch component was replaced with Routes in React Router v6
function App() {
  const[mode , setMode] = useState('light');//wheather dark mode is enabled or not
 const [alert , setAlert] = useState(null);

   const showAlert = (message , type) => {
      setAlert( {
        msg : message,
        types : type
      })
    //mai chata hu ki 2 sec baad ye alert null ho jaye
    setTimeout(()=> {setAlert(null) } , 1500);
   }  

  const toggleMode = () => {
    if(mode == 'dark'){
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled" , "success");
      // document.title = "TextUtils-Light mode";

      //contiuesly changing of title 
      // setInterval( () => {
      //   document.title = "install textUlits now"
      // }
      //       , 2000
      // )
      // setInterval(()=>{ document.title = "TextUtils is awesome "}
      //   , 1300
      // )
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(16, 17, 31)'
      showAlert("Dark mode is enabled" , "success");
      // document.title = "TextUtils-Dark mode";
    }
  }
  const togglegreenMode = () => {
    if(mode == 'green'){
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled" , "danger");
     
    }
    else{
      setMode('green')
      document.body.style.backgroundColor = 'rgb(57, 230, 111)'
      showAlert("Green mode is enabled" , "danger");
    
    }
  }
   
  return (
    <>
     {/* yaha se sab kuch start hoga */}
     <Router>
       < Navbar mode={mode} toggleMode={toggleMode}  togglegreenMode={togglegreenMode}/>
       
   <Alert  alert={alert}  />
   <div className="container my-3">
   <Routes>
    {/* exact use karne se path ko complete match karega */}
    <Route exact path="/" element={ < Textform  heading="Enter the text area" mode={mode} showAlert={showAlert} />} />
   
        <Route  exact path="/About" element={ < About  mode={mode}/>} />   
      </Routes>
      </div>
     </Router>
 
    </>
  );
}

export default App
//react router use hota single page application bannane mai jo ki react ka main motiv hai 
//isme mai bus ek paeticular content he change hoga our baki ka nahi hoga change jaise navbar , sidebar
