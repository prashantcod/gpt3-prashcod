import React from 'react'
import "./footers.css" 
import pslogo from "../../assets/logoing.png";

const Footers = () => {
  return (
    <div className="passGuard__footers  section__padding" id="footers">
       <div className="passGuard__footers-heading"> 
             <h1 className="gradient__text"> Do You want to Step into the zone Then Use PassGuard for Securing Passwords </h1>
       </div>
      
       <div className="passGuard__footers-button cursor-target"> 
          <p > Request Early Access</p>
       </div>
       <div className="passGuard__footers-links"> 
            <div className="passGuard__footers-links_logo"> 
                 <img  src={pslogo} alt="logo"/>
                 <p> Creckwood k12 budhanilkantha kathmandu and apna baby in the college house of the go get it part and it has mainly two functions  </p>
            </div>
            <div className='passGuard__footers-links_div'>
                 <h4>Links</h4>
                 <p>Overons</p>
                 <p>Social Media</p>
                 <p>Counters</p>
                 <p>Contacts</p>
            </div>

            <div className='passGuard__footers-links_div'>
                 <h4>Company</h4>
                 <p>Terms & Conditions</p>
                 <p>Privacy Policy</p>
                 <p>Contact</p>
            </div>

             <div className='passGuard__footers-links_div'>
                 <h4>Get in Touch</h4>
                 <p>Kapan Kathmandu-08</p>
                 <p>+977 9864116480</p>
                 <p>praccti@payment.net</p>
            </div>
       </div>
            
            <div className='passGuard__footers-copyright'>
                 <p> 2025 PassGuard . All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footers
