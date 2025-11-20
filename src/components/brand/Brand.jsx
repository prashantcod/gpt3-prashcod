import React from 'react'
import "./brand.css"; 
import {insta , google , facebook , reddit , quora} from "./import";
// import Lock from "../../assets/Locking.png";
// import jarvis from "../../assets/jarvis.jpeg";
const Brand = () => {
  return (
     <>
    <div className='gpt3__brand-names secton__padding'>
           <div >
                <img src={insta} alt="Instagram" />
           </div>
           <div>
                <img src={google} alt="google" />
           </div>
           <div>
                <img src={facebook} alt="facebook" />
           </div>
           <div>
                <img src={reddit} alt="reddit" />
           </div>
           <div>
                <img src={quora} alt="quora" />
           </div>
          
    </div>
     </>
  )
}

export default Brand
