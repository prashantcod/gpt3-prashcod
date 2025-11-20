import React from 'react';
import "./header.css";
import people from "../../assets/peoples.png"
import ai from "../../assets/ai.png";
import "./inputemail.css";
import "./button.css"


const Header = () => {
  return (
    <div className='gpt3__header section-padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let's  Build Some Password Or Manage It </h1>
        <p>PassGuard is a secure, privacy-first password manager designed to simplify and strengthen your digital life. It creates, stores, and autofills strong, unique passwords so you never have to remember them again. .</p>

        <div className='gpt3__header-content__input'>
          <div className="email-wrapper">
            <div className="email-glow">
              <input
                className="email-input cursor-target"
                type="email"
                placeholder="Add Your Email Address"
                required
              />
            </div>
          </div>
          <div className='container'>
            <button type='button' className='button  cursor-target'  >Get Started</button>
          </div>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="People" />
          <p>1,600 people requested access to visit in last 24 hours </p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="Ai image" />
      </div>


    </div>
  )
}

export default Header
