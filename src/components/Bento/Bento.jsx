
import React from 'react';

import './Bento.css';


const Bento = () => {
  return (
    <div className='part6 bento'
         id='bento'
    >
      <ul className='bento-wrapper'>
        <li className='first-row-col1 primary-color-box primary-text-contrast'
            style={{color: 'rgb(0, 0, 0)'}}
        >
          <h2>
            180K+ Users
          </h2>
          <span style={{fontSize: 'var(--p)', fontWeight: 'normal'}}>
            and counting...
          </span>
        </li>

        <li className='first-row-col2 secondary-color-box secondary-text-contrast'
            style={{color: 'var(--text)'}}
        >
          <h3>
            100% Free!
          </h3>
          <span style={{fontSize: 'var(--p)', fontWeight: 'normal'}}>
            Forever.
          </span>
        </li>

        <li className='second-row-col1 text-color-box'>
          <span style={{fontWeight: 'bold', zIndex: '5'}}>
            <h4>
              10K+ Plugin Users
            </h4>
          </span>
          <a className='link bento-link exclude'
             style={{fontSize: 'var(--p)', fontWeight: 'normal'}}
             href='https://www.figma.com/community/plugin/1234060894101724457/Realtime-Colors'
             target='_blank'  
          >
            Check it out on SpotiDown
          </a>
          <svg className='spotify-icon'
               width='335' height='472'
               viewBox='0 0 335 472'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15 236C15 264.427 29.205 289.546 50.8988 304.667C29.205 319.787 15 344.906 15 373.333C15 419.536 52.5239 457 98.7363 457C144.949 457 182.473 419.536 182.473 373.333V304.667V300.156C197.019 312.334 215.764 319.667 236.209 319.667C282.421 319.667 319.945 282.203 319.945 236C319.945 207.573 305.74 182.454 284.046 167.333C305.74 152.213 319.945 127.094 319.945 98.6667C319.945 52.4641 282.421 15 236.209 15H167.473H98.7363C52.5239 15 15 52.4641 15 98.6667C15 127.094 29.205 152.213 50.8988 167.333C29.205 182.454 15 207.573 15 236Z'
                  fill='var(--bg)' stroke='var(--bg)'
                  strokeWidth='30' strokeLinejoin='round'
            ></path>
            <path d='M98.7363 442C136.679 442 167.473 411.237 167.473 373.333V304.667H98.7363C60.7938 304.667 30 335.429 30 373.333C30 411.237 60.7938 442 98.7363 442Z'
                  fill='#0ACF83' 
            ></path>
            <path d='M30 236C30 198.096 60.7938 167.333 98.7363 167.333H167.473V304.667H98.7363C60.7938 304.667 30 273.904 30 236Z'
                  fill='#A259FF' 
            ></path>
            <path d='M30 98.6667C30 60.7627 60.7938 30 98.7363 30H167.473V167.333H98.7363C60.7938 167.333 30 136.571 30 98.6667Z'
                  fill='#F24E1E' 
            ></path>
            <path d='M167.473 30H236.209C274.151 30 304.945 60.7627 304.945 98.6667C304.945 136.571 274.151 167.333 236.209 167.333H167.473V30Z'
                  fill='#FF7262' 
            ></path>
            <path d='M304.945 236C304.945 273.904 274.151 304.667 236.209 304.667C198.266 304.667 167.473 273.904 167.473 236C167.473 198.096 198.266 167.333 236.209 167.333C274.151 167.333 304.945 198.096 304.945 236Z'
                  fill='#1ABCFE' 
            ></path>
          </svg>
        </li>

        <li className='second-row-col2 accent-color-box'
            style={{color: 'rgb(255, 255, 255)'}}
        >
          <span style={{fontWeight: 'bold'}}>
            <h4>
              180+ ProductHunt Upvotes
            </h4>
          </span>
          <a className='link bento-link exclude blue-bento-box'
             style={{fontSize: 'var(--p)', fontWeight: 'normal'}}
             href='https://www.producthunt.com/products/real-time-colors'
             target='_blank'
          >
            Leave a review
          </a>
        </li>
      </ul>
    </div>
  );
}


export default Bento;