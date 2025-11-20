import React from 'react' ;   //helps to import react
import ReactDOM from 'react-dom/client' ;  //helps to hook our react application to our index.html file 
import App from "./App" ;  
import "./index.css"

const root = ReactDOM.createRoot( document.getElementById("root")); // helps in hooking and here this root is an id from index.html folder 
root.render(<App/>);







