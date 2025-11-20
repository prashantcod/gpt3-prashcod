import React from 'react'
import "./feature.css"; 

const Feature = ({title,text , className}) => {
  return (
    <div className='passGuard__info-feature_feature'>
        <div className='passGuard__info-feature_feature-title'> 
            <div />
             <h1>{title}</h1>
        </div>
        <div className='passGuard__info-feature_feature-text'>
              <p>{text}</p>
        </div>
      </div>
  
  )
}

export default Feature
