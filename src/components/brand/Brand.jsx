import React from 'react'
import "./brand.css"; 
import {insta , google , facebook , reddit , quora} from "./import";
// import Lock from "../../assets/Locking.png";
// import jarvis from "../../assets/jarvis.jpeg";
const Brand = () => {
  return (
     <>
    <div className='gpt3__brand-names secton__padding'>
           <div className='cursor-target'>
                <img src={insta} alt="Instagram" />
           </div>
           <div className='cursor-target'>
                <img src={google} alt="google" />
           </div>
           <div className='cursor-target'>
                <img src={facebook} alt="facebook" />
           </div>
           <div className='cursor-target'>
                <img src={reddit} alt="reddit" />
           </div>
           <div className='cursor-target'>
                <img src={quora} alt="quora" />
           </div>
          
    </div>
     </>
  )
}

export default Brand
