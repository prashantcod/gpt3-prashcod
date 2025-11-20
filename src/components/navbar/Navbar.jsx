import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logoing.png";
import TargetCursor from '../../TargetCursor';

//making a varible which is used to wrap the react div's 
const Menu = () => (
  <>
    <p className='cursor-target'> <a href="#Home" >Home</a></p>
    <p className='cursor-target'> <a href="#wgpt3" >Vault</a></p>
    <p className='cursor-target'> <a href="#features" >Security Check</a></p>
    <p className='cursor-target'> <a href="#possibility" >Password Generator</a></p>
    <p className='cursor-target'> <a href="#blog" >Blog</a></p>
    <p className='cursor-target'> <a href="#footers" >About Us</a></p>
  </>
)

// BEM --> Block Element Modifier . 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img className="logo" src={logo} alt="logo" />
          <span className="brand-name cursor-target">PassGuard</span>
        </div>
        <div className='gpt3__navbar-links_container '>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p className='cursor-target'>Sign In </p>
        <button type='button' className='cursor-target'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }{toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p className='cursor-target'> Sign In </p>
                <button type='button' className='cursor-target'>Sign Up</button>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar
