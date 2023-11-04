
import React from 'react';

import './Footer.css';
import Favicon from '../../assets/favicon.png';

const Footer = () => {

  return (
    <div className='footer' id='footer' data-astro-cid-sz7xmlte=''>
      <div className='logo' data-astro-cid-sz7xmlte=''>
        <img src={Favicon} alt='logoface' className='logoface' data-astro-cid-sz7xmlte='' />
        <a href='https://www.realtimecolors.com/?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
          data-astro-cid-sz7xmlte=''
          style={{fontFamily: 'Poppins, sans-serif'}}
        >
          <p className='sitename reversed' data-astro-cid-sz7xmlte='' style={{fontFamily: 'Poppins, sans-serif'}}>
            SpotiDown
          </p>
        </a>
      </div>

      <div className='footer-cols' data-astro-cid-sz7xmlte=''>
        <div className='footer-col' data-astro-cid-sz7xmlte=''>
          <p style={{margin: '0px', fontFamily: 'Poppins, sans-serif'}} data-astro-cid-sz7xmlte=''>
            Visualize your color choices.
          </p>

          <a className='exclude'
            href='https://www.producthunt.com/posts/real-time-colors?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-real-time-colors'
            target='_blank' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            <img src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=390080&amp;theme=dark'
                alt='Real-time Colors - Real-time UI Color Palette Tool | Product Hunt'
                style={{width: '250px', height: '54px'}} width='250' height='54'
                data-astro-cid-sz7xmlte=''
            />
          </a>

          <div className='btn-container'>
            <a title='Support me on ko-fi.com' className='kofi-button'
              style={{backgroundColor: 'rgb(26, 26, 26)', fontFamily: 'Poppins, sans-serif'}}
              href='https://ko-fi.com/Z8Z2L1JGX?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
              target='_blank'
            >
              <span className='kofitext'>
              <img src='https://storage.ko-fi.com/cdn/cup-border.png'
                  alt='Ko-fi donations' className='kofiimg'
              />
                Support Me on Ko-fi
              </span>
            </a>
          </div>
        </div>
        
        <div className='footer-col' data-astro-cid-sz7xmlte=''>
          <div className='reversed menu-item-header' data-astro-cid-sz7xmlte=''>
            EXPLORE
          </div>
          <a href='https://www.realtimecolors.com/docs/about-realtime-colors?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
            className='menu-item reversed' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            Docs
          </a>
          <a href='https://www.figma.com/community/plugin/1234060894101724457/Realtime-Colors'
            target='_blank'
            className='menu-item exclude' data-astro-cid-sz7xmlte='' style={{fontFamily: 'Poppins, sans-serif'}}
          >
            Figma Plugin
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'
                viewBox='0 0 14 14' fill='none' data-astro-cid-sz7xmlte=''
            >
              <rect x='0.318182' y='0.318182'
                    width='13.3636' height='13.3636'
                    rx='2.10647' stroke='var(--text)'
                    strokeWidth='0.636364'
                    data-astro-cid-sz7xmlte=''
              ></rect>
              <path d='M4.33594 9.7564L9.75615 4.33618M9.75615 4.33618L5.41998 4.33618M9.75615 4.33618V8.94337'
                    stroke='var(--text)' strokeWidth='0.813033' strokeLinecap='round'
                    strokeLinejoin='round' data-astro-cid-sz7xmlte=''
              ></path>
            </svg>
          </a>
          <a href='https://www.realtimecolors.com/dashboard?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
            className='menu-item reversed' data-astro-cid-sz7xmlte='' style={{fontFamily: 'Poppins, sans-serif'}}
          >
            Dashboard template
          </a>
          <a href='https://www.realtimecolors.com/blog-post?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
            className='menu-item reversed' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            Blog post template
          </a>
        </div>
        <div className='footer-col' data-astro-cid-sz7xmlte=''>
          <div className='reversed menu-item-header' data-astro-cid-sz7xmlte=''>
            LET'S CONNECT
          </div>
          <a href='https://www.realtimecolors.com/contact?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
            target='_blank' className='menu-item reversed' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            Contact me
          </a>
          <a href='https://www.youtube.com/@juxtopposed' target='_blank'
            className='menu-item reversed exclude' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            YouTube
          </a>
          <a href='https://github.com/juxtopposed' target='_blank'
            className='menu-item reversed exclude' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            GitHub
          </a>
          <a href='https://codepen.io/Juxtopposed' target='_blank'
            className='menu-item reversed exclude' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            CodePen
          </a>
        </div>
      </div>

      <div style={{width: '100%', height: '1px', backgroundColor: 'var(--text)', opacity: 0.1, marginTop: '1em'}}
          data-astro-cid-sz7xmlte=''
      ></div>
      <div data-astro-cid-sz7xmlte=''>
        <p data-astro-cid-sz7xmlte='' style={{fontFamily: 'Poppins, sans-serif'}}>
          Made with ❤ by&nbsp;
          <a href='https://twitter.com/juxtopposed' target='_blank'
            className='link reversed exclude' data-astro-cid-sz7xmlte='' style={{fontFamily: 'Poppins, sans-serif'}}
          >
            @Juxtopposed
          </a>
        </p>
        <p data-astro-cid-sz7xmlte='' style={{fontFamily: 'Poppins, sans-serif'}}>
          No cookies 🍪 Just colors 🎨 and fonts 🔡
        </p>
        <small data-astro-cid-sz7xmlte='' style={{fontFamily: 'Poppins, sans-serif'}}>
          Copyright © 2023 All Rights Reserved.&nbsp;
          <a href='https://github.com/juxtopposed/realtimecolors/blob/main/LICENSE.md' target='_blank'
            className='link reversed exclude' data-astro-cid-sz7xmlte=''
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            CC BY-NC-ND
          </a>
          &nbsp;License.
        </small>
      </div>
    </div>
  )
}


export default Footer;