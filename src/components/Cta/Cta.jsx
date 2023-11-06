
import React from 'react';

import './Cta.css';


const Cta = () => {
  return (
    <div className='last-cta'
         id='cta'
    >
      <h2>
        Your
        <span className='color-effect'>
          Journey
        </span>
        Shouldn't End Here.
      </h2>

      <h5>
        Follow me on social media to stay tuned on more projects.
      </h5>

      <a className='primary-button primary-text-contrast exclude'
         href='https://twitter.com/juxtopposed'
         target='_blank'
         style={{color: 'rgb(0, 0, 0)'}}
      >
        Stay Tuned
      </a>
    </div>
  );
}


export default Cta;