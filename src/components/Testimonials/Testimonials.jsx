
import React, { useState } from 'react';
import {
  FaStar,
  FaStarHalfAlt,
  FaUserAlt
} from 'react-icons/fa';

import './Testimonials.css';


const Testimonials = () => {
  const [stars, setStars] = useState([5, 3.5, 4.5]);

  const renderStars = (stars_nbr) => {
    const starElements = [];
    const fullStars = Math.floor(stars_nbr);
    const hasHalfStar = stars_nbr % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++)
      starElements.push(<FaStar key={`full-${i}`} className='rating' size={30} fill='var(--accent)' />);
  
    if (hasHalfStar)
      starElements.push(<FaStarHalfAlt key='half' className='rating' size={30} fill='var(--accent)' />);
  
    return starElements;
  };

  return (
    <div className='section column'
         id='testimonials'
    >
      <div className='part-heading center'>
        <h2>
          Testimonials
        </h2>
        <h5>
          What (potential) premium subscribers are saying about this tool.
        </h5>
      </div>
      <div className='section-cards'>
        <div className='section-card'>
          <div className='reviewer'>
            <div className='reviewer-img r-one'>
              <FaUserAlt className='reviewer-icon' size={40} fill='var(--black)' />
            </div>
            <div className='reviewer-name'>
              Cool User
              <br />
              <span style={{opacity: '0.5'}}>
                Product Designer
              </span>
            </div>
          </div>

          <div className='rating'>
          {
            renderStars(stars[0])
          }
          </div>
          <p className='review'>
            "Wow! I love this site. Realtime Colors is all websites at the same time."
          </p>
        </div>

        <div className='section-card'>
          <div className='reviewer'>
            <div className='reviewer-img r-two'>
              <FaUserAlt className='reviewer-icon' size={40} fill='var(--black)' />
            </div>
            <div className='reviewer-name'>
              Creative Person
              <br />
              <span style={{opacity: '0.5'}}>
                Product Owner
              </span>
            </div>
          </div>

          <div className='rating'>
          {
            renderStars(stars[1])
          }
          </div>
          <p className='review'>
            "Amazing. I found my favorite colors in literally... 2 minutes? Woah! Totally real review."
          </p>
        </div>

        <div className='section-card'>
          <div className='reviewer'>
            <div className='reviewer-img r-three'>
              <FaUserAlt className='reviewer-icon' size={40} fill='var(--black)' />
            </div>
            <div className='reviewer-name'>
              Real Reviewer
              <br />
              <span style={{opacity: '0.5'}}>
                Developer
              </span>
            </div>
          </div>

          <div className='rating'>
          {
            renderStars(stars[2])
          }
          </div>
          <p className='review'>
            "Astonished. This product is so cool. You should try it and upgrade to Enterprise plan. No kidding."
          </p>
        </div>
      </div>
    </div>
  );
}


export default Testimonials;