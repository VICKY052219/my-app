
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router ,Routes,Route, BrowserRouter } from 'react-router-dom';
 
function App() {
  const [mode, setMode] =useState('light');// whether dark mode is enable or not
  const [alert,setAlert] =useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
   }   ,1500) ;
  }

  const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enable","success");
          document.title="TextUtils-Dark Mode";
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enable","success");
          document.title="TextUtils-Light  Mode";
        }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" aboutText="About Text-Utils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'mode={mode} >
    
    {/* <Routes> */}

          {/* <Route path="/about" element={<About/>}> </Route> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>  */}
          {/* </Route> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* </Routes> */}
        </div>
        {/* // </BrowserRouter> */}
    </> 
  );
}

export default App;
