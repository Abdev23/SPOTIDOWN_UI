
import React from 'react';

import './Footer.css';
import Favicon from '../../assets/favicon.png';

const Footer = () => {

  return (
    <main>
      <div className='footer'
           id='footer'
      >
        <div className='logo'>
          <img src={Favicon} alt='logoface' className='logoface' />
          <a href='/'>
            <p className='sitename reversed'>
              SpotiDown
            </p>
          </a>
        </div>

        <div className='footer-cols'>
          <div className='footer-col'>
            <p style={{margin: '0px'}}>
              Explore music effortlessly.
            </p>

            <div className='btn-container'>
              <a title='Support me on ko-fi.com' className='kofi-button'
                 style={{backgroundColor: 'rgb(26, 26, 26)'}}
                 href='/support-dev'
                 target='_blank'
              >
                <span className='kofitext'>
                <img className='kofiimg'
                     src='https://storage.ko-fi.com/cdn/cup-border.png'
                     alt='Ko-fi donations'
                />
                  Support Dev
                </span>
              </a>
            </div>
          </div>

          <div className='footer-col'>
            <div className='reversed menu-item-header'>
              LEGAL
            </div>
            <a href='/about-us'
               className='menu-item reversed' 
            >
              About Us
            </a>
            <a className='menu-item exclude'
               href='/contact-us'
            >
              Contact Us
            </a>
            <a className='menu-item reversed'
               href='/terms'
            >
              Terms of service
            </a>
            <a className='menu-item reversed' 
               href='/privacy-policy'
            >
              Privacy Policy
            </a>
          </div>

          <div className='footer-col'>
            <div className='reversed menu-item-header'>
              LET'S CONNECT
            </div>
            <a className='menu-item reversed'
               href='https://www.youtube.com/'
               target='_blank'
            >
              Youtube
            </a>
            <a className='menu-item reversed exclude'
               href='https://www.twitter.com/'
               target='_blank'
            >
              Twitter
            </a>
            <a className='menu-item reversed exclude'
               href='https://facebook.com/'
               target='_blank'
            >
              Facebook
            </a>
            <a className='menu-item reversed exclude'
               href='https://instagram.com/'
               target='_blank'
            >
              Instagram
            </a>
          </div>
        </div>

        <div style={{width: '100%', height: '1px', backgroundColor: 'var(--text)', opacity: 0.1, marginTop: '1em'}}></div>

        <div>
          <p>
            Made by&nbsp;
            <a className='link reversed exclude'
               href='https://twitter.com/AbdelhamidMa23/'
               target='_blank'
            >
              @AbdelhamidMa23
            </a>
          </p>
          <p>
            Inspired by&nbsp;
            <a className='link reversed exclude'
               href='https://www.realtimecolors.com/'
               target='_blank'
            >
              🌐
            </a>
            &nbsp;
            <a className='link reversed exclude'
               href='https://twitter.com/juxtopposed/'
               target='_blank'
            >
              @Juxtopposed
            </a>
          </p>

          <small>
            Copyright © 2023 All Rights Reserved.&nbsp;
            <a className='link reversed exclude'
               href='https://github.com/Abdev23/SPOTIDOWN_UI/blob/main/README.md'
               target='_blank'
            >
              spotidown
            </a>
          </small>
        </div>
      </div>
    </main>
  )
}


export default Footer;