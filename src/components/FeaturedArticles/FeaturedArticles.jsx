
import React from 'react';

import './FeaturedArticles.css';


const FeaturedArticles = () => {
  return (
    <div className='section column'
         id='featured-posts'
    >
      <div className='part-heading center'>
        <h2>
          Featured Articles
        </h2>
        <h5>
          Just some interesting guides and posts.
        </h5>
      </div>

      <div className='section-cards featured-col'>
        <div className='doc-item main-page'>
          <a className='doc-link'
             style={{fontSize: 'var(--p)', padding: '2em 1em'}}
             href='https://www.realtimecolors.com/docs/examples?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
          >
            Examples of Colors from Popular Sites
          </a>
          <div className='col1-doc-link-bg'></div>
        </div>

        <div className='doc-item main-page'>
          <a className='doc-link'
             style={{fontSize: 'var(--p)', padding: '2em 1em'}}
             href='https://www.realtimecolors.com/docs/selecting-colors?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
          >
            How to Select Colors
          </a>
          <div className='col1-doc-link-bg'></div>
        </div>

        <div className='doc-item main-page'>
          <a className='doc-link'
             style={{fontSize: 'var(--p)', padding: '2em 1em'}}
             href='https://www.realtimecolors.com/docs/releases?colors=eae9fc-010104-3a31d8-020024-0600c2&amp;fonts=Poppins-Poppins'
          >
            Learn More about the Releases
          </a>
          <div className='col1-doc-link-bg'></div>
        </div>
      </div>
    </div>
  );
}


export default FeaturedArticles;