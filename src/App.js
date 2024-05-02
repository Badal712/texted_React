import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, {useState} from 'react';
// import {Routes } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  //setMode("");

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert(" Dark mode has been enable","success");
      document.title = 'editKar - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enable","success");
      document.title = 'editKar - Light Mode'
    }
  }
 
  return (
    <>
    {/* <Router> */}
      <Navbar title="editKar" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about"element={<About mode={mode}/>}></Route>
          
          <Route exact path="/" element={ */}
          <TextForm showAlert = {showAlert} heading="Enter The Text to Analize Below" mode={mode}/>
          {/* }></Route>
           
          
        </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
