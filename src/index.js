import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let myname = "Anton"

let CustomStyle = {
  color: "grey",
  fontSize: "40px",
  border: "15px solid orange"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  <h1 className="heading">Hallo ich bin der Kevin</h1>
  
  <h2 className='blue'> und ich bin der {myname}</h2>

  <h3 className='heading'>Meine Lieblingszahl ist {Math.round(Math.random() *10)}</h3>

 <background className="able">Hallo ich bin auch der Button </background>


  <button id='5' className='violet'>Klick mich</button>
  
<h5 style={{color: "pink"}}>Faben Test</h5>
  
  <h4>Ich bin ein Wort </h4>

  <h4 style={CustomStyle}>ich bin ein inline CSS </h4>
  </>

 // <React.StrictMode>
 //   <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
