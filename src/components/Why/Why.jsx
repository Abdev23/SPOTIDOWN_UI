
import React from 'react';

import './Why.css';


const Why = () => {

  return (
    <div className='section column'
         id='why'
    >
      <h2>
        Why SpotiDown?
      </h2>
      
      <div className='section-cards' >
        <div className='section-card' >
          <svg className='section-card-img' 
               width='117' height='117'
               viewBox='0 0 117 117'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='58.5' cy='58.5'
                    r='58.5' fill='var(--bg)'
                    
            ></circle>
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M87.8217 7.86778C88.7499 8.40648 89.0469 9.59549 88.5152 10.5277L58.9095 62.429C58.4148 63.2962 57.3564 63.6658 56.4294 63.295L4.14483 42.3812C3.18375 41.9968 2.67153 40.9403 2.99938 39.9584C10.7533 16.7379 32.672 0 58.5 0C69.185 0 79.2009 2.86463 87.8217 7.86778Z'
                  fill='var(--accent)'
                  fillOpacity='0.6'
                  
            ></path>
            <path d='M81.5 22.5L57.1395 64.8489L32 53.5'
                  stroke='var(--text)'
                  strokeWidth='8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  
            ></path>
          </svg>
          
          <h4 className='highlight'>
            Saves time
          </h4>
          <p>
            No need to spend hours implementing different variations of colors. Decide right away!
          </p>
        </div>

        <div className='section-card'>
          <svg className='section-card-img' 
               width='112' height='114'
               viewBox='0 0 112 114'
               fill='none' xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='58' height='58'
                  rx='5' fill='var(--bg)'
                  
            ></rect>
            <rect x='69' y='25'
                  width='33' height='33'
                  rx='5'
                  fill='var(--accent)'
                  fillOpacity='0.6'
                  
            ></rect>
            <rect x='69' y='71'
                  width='43' height='43' rx='5'
                  fill='var(--text)'
                  fillOpacity='0.1'
                  
            ></rect>
            <rect x='20' y='70'
                  width='38' height='39'
                  rx='5' fill='var(--text)'
                  
            ></rect>
          </svg>
          
          <h4 className='highlight'>
            It’s Realistic
          </h4>
          <p>
            Color Palettes make it hard to pick. This tool distributes the colors on a real website.
          </p>
        </div>

        <div className='section-card'>
          <svg className='section-card-img' 
               width='178' height='89'
               viewBox='0 0 178 89'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
          >
            <rect y='26'
                  width='154' height='63'
                  rx='5' fill='var(--accent)'
                  fillOpacity='0.6'
                  
            ></rect>
            <path d='M142 16L142 4' stroke='var(--text)'
                  strokeWidth='8' strokeLinecap='round'
                  
            ></path>
            <path d='M163 34H174' stroke='var(--text)'
                  strokeWidth='8' strokeLinecap='round'
                  
            ></path>
            <path d='M158 19L168 9' stroke='var(--text)'
                  strokeWidth='8' strokeLinecap='round'
                  
            ></path>
            <path d='M62 57L73.5 68L94.5 47' stroke='var(--text)'
                  strokeWidth='8' strokeLinecap='round'
                  strokeLinejoin='round'
                  
            ></path>
          </svg>
          
          <h4 className='highlight'>
            It’s simple
          </h4>
          <p>
            Push a few buttons, and there you have it! Your very own branding colors, ready to export.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Why;