//rafce for bolierplate of react 
import React from 'react';
import TargetCursor from './TargetCursor';
import {Article , Brand , Cta , Feature , Navbar} from "./components" ;
import {Footers , Features , Blog , Possibility , PassGuard , Header} from "./containers"; 
import "./App.css"; 

const App = () => {
  return (
    
    <div className='App'>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
        
        <div className='gradient__bg'>
               <Navbar /> 
               <Header/> 
        </div>

        <Brand />
        <PassGuard/>
        <Features/>
        <Possibility/> 
        <Cta/> 
        <Blog/> 
        <Footers/> 
    </div>
  )
}

export default App
