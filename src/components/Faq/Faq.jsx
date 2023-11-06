
import React from 'react';

import './Faq.css';


const Faq = () => {
  return (
    <div className='faq-section'
         id='faq'
    >
      <div className='part-heading left'>
        <h2>
          FAQ
        </h2>
        <h5>
          Answers to some questions you might have.
        </h5>
      </div>

      <div className='faq-list'>
        <div className='faq-cont'>
          <h5 className='faq secondary-text-contrast'
              style={{color: 'var(--text)'}}
          >
            How many colors should I choose?
            <svg className='faq-icon' 
                 width='23' height='23'
                 viewBox='0 0 23 23' fill='none'
            >
              <path d='M11.5 0L11.5 23' stroke='var(--accent)' strokeWidth='6'></path>
              <path d='M23 11.5L-2.38419e-07 11.5' stroke='var(--accent)' strokeWidth='6'></path>
            </svg>
          </h5>
          <div className='faq-a secondary-text-contrast'
               style={{color: 'var(--text)'}}
          >
            <p>
              Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).
              <br />
              However, if you want, you can have more. Usually, we don’t add more than 6 colors
              across a platform. It would just make things too... complicated. Plus, it makes it hard to
              keep the colors consistent throughout the design.
            </p>
          </div>
        </div>

        <div className='faq-cont'>
          <h5 className='faq secondary-text-contrast'
              style={{color: 'var(--text)'}}
          >
            How does the contrast checker work?
            <svg className='faq-icon'
                 width='23' height='23'
                 viewBox='0 0 23 23'
                 fill='none'
            >
              <path d='M11.5 0L11.5 23' stroke='var(--accent)' strokeWidth='6'></path>
              <path d='M23 11.5L-2.38419e-07 11.5' stroke='var(--accent)' strokeWidth='6'></path>
            </svg>
          </h5>
          <div className='faq-a secondary-text-contrast'
               style={{color: 'var(--text)'}}
          >
            <p>
              The contrast checker shows the contrast ratio between the selected color and its background/foreground.
              <br />
              <br />
              The contrast checker has 3 lights:
            </p>
            <ul style={{lineHeight: '2', fontSize: 'var(--p)'}}>
              <li>
                <b> x / Red: </b>
                The contrast ratio does not pass either AAA or AA. Therefore, both large and normal texts are hardly readable.
              </li>
              <li>
                <b> - / Yellow: </b>
                The contrast ratio might pass AA but won't pass AAA. Large texts might be readable
                but normal texts are probably not readable.
              </li>
              <li>
                <b> ✓ / Green: </b>
                The contrast ratio passes both AA and AAA. Both large and normal texts are readable.
              </li>
            </ul>
            <p>
              Learn more about the
              <a className='link'  
                 href='https://www.realtimecolors.com/docs/contrast-checker?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
                 target='_blank'
              >
                contrast checker
              </a>
              .
            </p>
          </div>
        </div>

        <div className='faq-cont'>
          <h5 className='faq secondary-text-contrast'
              style={{color: 'var(--text)'}}
          >
            What does the hero image represent?
            <svg className='faq-icon' 
                 width='23' height='23'
                 viewBox='0 0 23 23'
                 fill='none'
            >
              <path d='M11.5 0L11.5 23' stroke='var(--accent)' strokeWidth='6'></path>
              <path d='M23 11.5L-2.38419e-07 11.5' stroke='var(--accent)' strokeWidth='6'></path>
            </svg>
          </h5>
          <div className='faq-a secondary-text-contrast' style={{color: 'var(--text)'}}>
            <p>
              The hero image is inspired by Piet Mondrian's
              <b>
                Composition with Large Red Plane, Yellow, Black, Grey and Blue
              </b>
              . This composition keeps the ratio of the main colors (red, blue, and
              yellow) very close to the 60-30-10 rule of UI design. This is mainly why I've chosen this
              composition to visualize the distribution of the colors on the page.
            </p>
          </div>
        </div>

        <div className='faq-cont'>
          <h5 className='faq secondary-text-contrast'
              style={{color: 'var(--text)'}}
          >
            How can I set up the fonts?
            <svg className='faq-icon' 
                 width='23' height='23'
                 viewBox='0 0 23 23'
                 fill='none'
            >
              <path d='M11.5 0L11.5 23' stroke='var(--accent)' strokeWidth='6'></path>
              <path d='M23 11.5L-2.38419e-07 11.5' stroke='var(--accent)' strokeWidth='6'></path>
            </svg>
          </h5>
          <div className='faq-a secondary-text-contrast' style={{color: 'var(--text)'}}>
            <p>
              You can enter the name of a font from Google Fonts or the fonts installed on your device. Read more about
              <a className='link'
                 href='https://www.realtimecolors.com/docs/font-setup?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
                 target='_blank'
              >
                Font Setup
              </a>
              .
            </p>
          </div>
        </div>

        <div className='faq-cont'>
          <h5 className='faq secondary-text-contrast'
              style={{color: 'var(--text)'}}
          >
            How can I learn more about this tool?
            <svg className='faq-icon' 
                 width='23' height='23'
                 viewBox='0 0 23 23'
                 fill='none'
            >
              <path d='M11.5 0L11.5 23' stroke='var(--accent)' strokeWidth='6'></path>
              <path d='M23 11.5L-2.38419e-07 11.5' stroke='var(--accent)' strokeWidth='6'></path>
            </svg>
          </h5>
          <div className='faq-a secondary-text-contrast'
               style={{color: 'var(--text)'}}
          >
            <p>
              You can find more information about Realtime Colors on the
              <a className='link' 
                 href='https://www.realtimecolors.com/docs?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
                 target='_blank'
              >
                Docs
              </a>
              . You can also
              <a className='link' 
                 href='https://www.realtimecolors.com/contact?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
                 target='_blank'
              >
                contact me
              </a>
              for any questions you might have.
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
}


export default Faq;