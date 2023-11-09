 
import React from 'react';

import './Search.css';


const SearchLoader = () => {
  return (
    <div className='search-loader-container'>
      <svg className='loader-1'
           xmlns='http://www.w3.org/2000/svg'
           x='0px' y='0px'
           viewBox='0 0 100 100'
      >
        <rect fill='none' stroke='var(--primary)'
              strokeWidth='4'
              x='25' y='25'
              width='50' height='50'
        >
          <animateTransform id='strokeBox'
                            attributeName='transform' attributeType='XML'
                            begin='rectBox.end' dur='0.5s' type='rotate'
                            from='0 50 50' to='180 50 50'
          />
        </rect>
        <rect x='27' y='27' fill='var(--primary)' width='46' height='50'>
          <animate id='rectBox'
                   attributeName='height' attributeType='XML'
                   begin='0s;strokeBox.end' dur='1.3s'
                   from='50' to='0'
                   fill='freeze'
          />
        </rect>
      </svg>

      {/* <svg className='loader-2'
           xmlns='http://www.w3.org/2000/svg'
           x='0px' y='0px'
           viewBox='0 0 100 100'
      >
        <rect fill='var(--primary)'
              width='3' height='100'
              transform='translate(0) rotate(180 3 50)'
        >
          <animate attributeName='height'
                   attributeType='XML'
                   dur='1s'
                   values='30; 100; 30'
                   repeatCount='indefinite'
          />
        </rect>
        <rect x='17' fill='var(--primary)'
              width='3' height='100'
              transform='translate(0) rotate(180 20 50)'
        >
          <animate attributeName='height' attributeType='XML'
                   dur='1s' values='30; 100; 30'
                   repeatCount='indefinite' begin='0.1s'
          />
        </rect>
        <rect x='40' fill='var(--primary)'
              width='3' height='100'
              transform='translate(0) rotate(180 40 50)'
        >
          <animate attributeName='height'
                   attributeType='XML'
                   dur='1s'
                   values='30; 100; 30'
                   repeatCount='indefinite'
                   begin='0.3s'
          />
        </rect>
        <rect x='60' fill='var(--primary)'
              width='3' height='100'
              transform='translate(0) rotate(180 58 50)'
        >
          <animate attributeName='height' attributeType='XML'
                   dur='1s' values='30; 100; 30'
                   repeatCount='indefinite' begin='0.5s'
          />
        </rect>
        <rect x='80' fill='var(--primary)'
              width='3' height='100'
              transform='translate(0) rotate(180 76 50)'
        >
          <animate attributeName='height' attributeType='XML'
                   dur='1s' values='30; 100; 30'
                   repeatCount='indefinite' begin='0.1s'
          />
        </rect>
      </svg> */}
    </div>
  );
}


export default SearchLoader;