
import React from 'react';

import './Pricing.css';


const Pricing = () => {
  return (
    <div className='pricing'
         id='sub'
    >
      <div className='part-heading center'>
        <h2>
          Plans &amp; Pricing
        </h2>
        <h5>
          The tool comes at absolutely no cost! This section is for testing UI.
        </h5>
      </div>
      
      <div className='pricing-cards'>
        <div className='pricing-card'>
          <div className='pricing-card-text'>
            <div className='promo'
                 style={{visibility: 'hidden'}}
            >
              <p className='promo-text'>
                None
              </p>
            </div>
            <h4>
              Basic
            </h4>
            <p>
              Free
            </p>
            <div className='pricing-list'>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Access to basic metadata information for Spotify songs
                </p>
              </div>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Limited number of requests per day
                </p>
              </div>
            </div>
          </div>
          <a href='https://www.realtimecolors.com/?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins#toolbar'
             className='secondary-button secondary-text-contrast highlight-toolbar'
             style={{color: 'var(--text)'}}
          >
            Try for Free
          </a>
          <div className='pricing-bg'></div>
        </div>

        <div className='pricing-card'>
          <div className='pricing-card-text'>
            <div className='promo'>
              <svg width='27' height='28'
                   viewBox='0 0 27 28'
                   fill='none'
              >
                <path d='M13.5412 0.494507L14.6922 8.99311L19.4165 1.83551L16.7661 9.99186L24.1282 5.59291L18.2013 11.7915L26.7429 11.0225L18.7135 14.0357L26.7429 17.0489L18.2013 16.2799L24.1282 22.4785L16.7661 18.0796L19.4165 26.2359L14.6922 19.0783L13.5412 27.5769L12.3903 19.0783L7.6659 26.2359L10.3163 18.0796L2.95427 22.4785L8.88114 16.2799L0.339506 17.0489L8.36893 14.0357L0.339506 11.0225L8.88114 11.7915L2.95427 5.59291L10.3163 9.99186L7.6659 1.83551L12.3903 8.99311L13.5412 0.494507Z'
                      fill='var(--primary)'
                ></path>
              </svg>
              <p className='promo-text'>
                Most Popular
              </p>
            </div>
            <h4>
              Pro
            </h4>
            <p>
              $15.00 / month
            </p>
            <div className='pricing-list'>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Access to basic metadata information for Spotify songs.
                </p>
              </div>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Ad-free experience.
                </p>
              </div>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Get a big thank you for checking this site out
                </p>
              </div>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Get access to dashboard
                </p>
              </div>
            </div>
          </div>
          <a className='primary-button primary-text-contrast'
             href='https://www.realtimecolors.com/dashboard?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
             target='_blank'
             style={{color: 'rgb(0, 0, 0)'}}
          >
            Upgrade now
          </a>
          <div className='pricing-bg best'></div>
        </div>

        <div className='pricing-card'>
          <div className='pricing-card-text'>
            <div className='promo'
                 style={{visibility: 'hidden'}}
            >
              <p className='promo-text'>
                None
              </p>
            </div>
            <h4>
              Enterprise
            </h4>
            <p>
              $19.00 / month
            </p>
            <div className='pricing-list'>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Access to basic metadata information for Spotify songs.
                </p>
              </div>
              <div className='list'>
                <svg width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                     className='check-icon'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Ad-free experience.
                </p>
              </div>
              <div className='list'>
                <svg width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                     className='check-icon'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Dedicated server resources for high-volume requests.
                </p>
              </div>
              <div className='list'>
                <svg className='check-icon'
                     width='29' height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  Customizable features and integration options.
                </p>
              </div>
              <div className='list'>
                <svg className='check-icon'
                     width='29'
                     height='22'
                     viewBox='0 0 29 22'
                     fill='none'
                >
                  <path d='M3 9.72308L11.1385 17.8615L26 3'
                        stroke='var(--accent)'
                        strokeWidth='5.66154'
                  ></path>
                </svg>
                <p className='list-item'>
                  24/7 priority customer support.
                </p>
              </div>
            </div>
          </div>

          <a className='secondary-button secondary-text-contrast'
             href='https://www.realtimecolors.com/blog-post?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
             target='_blank'
             style={{color: 'var(--text)'}}
          >
            Contact Sales
          </a>
          <div className='pricing-bg'></div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;