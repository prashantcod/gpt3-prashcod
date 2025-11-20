import React from 'react'; 
import "./possibility.css" ; 
import puossibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="passGuard__possiblity section-margin" id='possibility'>
        <div className='passGuard__possiblity-image'>
           <img src={puossibility} alt={Possibility} />
        </div>
        <div className='passGuard__possiblity-content'>
             <h4>Join the Security Revolution to Get Started</h4>
             <h1 className='gradient__text'>Your Digital Freedom is Beyond Your Imagination</h1>
             <p>We believe security shouldn't slow you down. PassGuard removes the friction of forgotten passwords and data breaches, giving you the freedom to explore the internet without fear. Experience a Vault that adapts to your life, keeping your identity secure while you focus on what truly matters.</p>
             <h4>Create Your Free Account Today</h4>
        </div>
    </div>
  )
}

export default Possibility
