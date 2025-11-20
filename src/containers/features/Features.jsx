import React from 'react'
import "./features.css" ;
import Feature from "../../components/feature/Feature";
import lefty from "../../assets/features_01.png";


let featuresData = [
   { title : "The Secure Vault" , text : "The PassGuard Vault is your digital fortress. All your logins, cards, and notes are sealed with uncrackable, zero-knowledge encryption that only you can unlock."},
   { title : "Unbreakable Passwords" , text : "Stop using 'Password123!'. Our generator creates truly random, complex passwords for every new site, securing you from brute-force attacks and breaches"} ,
   { title : "Proactive Security Check" , text : "Our Security Check is your 24/7 auditor. It actively scans for weak, reused, or breached passwords, so you can fix vulnerabilities before they're ever exploited."},
   { title : "Log in Instantly, Everywhere" , text : "PassGuard auto-fills your credentials on all your devices. Sign in to any app or website across your phone and computer with a single, secure click."}
]
const Features = () => {
  return (
    <div className='passGuard__features  section-padding' id='features' >
        <div className='passGuard__features-heading'>
              <h1 className='gradient__text'> Your Security is Finally Simple.Stop Remembering Passwords.Step into a 
                Safer Future Today.</h1>
              <p>Create Your Secure Account To Get Started</p>
               <img src={lefty} alt="loking" />
        </div>
        <div className='passGuard__features-container'>
            {featuresData.map((item , index) => (
                 <Feature title={item.title} 
                 text={item.text} 
                 className={`feature-container-${index}`}
                 key={item.title + index}/>
           ))} 
           

          
        </div>
        <div className='passGuard__features-image'>
             
        </div>
        
    </div>
  )
}

export default Features;


//<Feature className="passGuard__features-container_01" title="The Secure Vault" text="The PassGuard Vault is your digital fortress. All your logins, cards, and notes are sealed with uncrackable, zero-knowledge encryption that only you can unlock."/>
          //  <Feature  className="passGuard__features-container_01" title="Unbreakable Passwords"  text= "Stop using 'Password123!'. Our generator creates truly random, complex passwords for every new site, securing you from brute-force attacks and breaches"/>
          //  <Feature  className="passGuard__features-container_01" title="Proactive Security Check" text= "Our Security Check is your 24/7 auditor. It actively scans for weak, reused, or breached passwords, so you can fix vulnerabilities before they're ever exploited." />
          //  <Feature   className="passGuard__features-container_01" 
          //  title ="Log in Instantly, Everywhere"  text = "PassGuard auto-fills your credentials on all your devices. Sign in to any app or website across your phone and computer with a single, secure click."/>