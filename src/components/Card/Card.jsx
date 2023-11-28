
import React from 'react';
import { MdDownload } from 'react-icons/md';

import './Card.css';


const Card = ({md}) => {
  let cardData = {};
  const spotifyData = (md) => {
    if (md.type === 'track')
    {
      cardData.type = md.type;
    }
    else if (md.type === 'album')
    {
      cardData.type = md.type;
    }
    else if (md.type === 'playlist')
    {
      /* cardData.id = md.id;
      cardData.description = md.description;
      cardData.url = md.external_urls.spotify;
      cardData.followers = md.followers.total;
      cardData.href = md.href;
      cardData.image = md.images[0].url;
      cardData.imageWidth = md.images[0].width;
      cardData.imageHeight = md.images[0].height;
      cardData.name = md.name;
      cardData.owner = md.owner.display_name; */
     cardData.type = md.type;
    }
    else if (md.type === 'artist')
    {
      cardData.type = md.type;
    }
    else
    {
      cardData.error = 'Uknown data!';
    }
  }

  spotifyData(md);

  return (
    <>
      <div className='card'
           id='card'
      >
        <div className='card-hover'>
          <div className='card-data-container'>
            <div className='card-image-container'
                  style={{'--card-color': '#B840D0'}}
            >
              <img className='card-image'
                   loading='lazy'
                   src='https://i.scdn.co/image/ab67616d0000b2737d384516b23347e92a587ed1'
                   alt='Image Description'
              />
            </div>
            <div className='card-data'>
              <span className='card-type'>
                {cardData.type}
              </span>

              <span className='card-title truncate-text'>
                First Person Shooter (feat. J. Cole)
              </span>

              <span className='card-explicit-artist'>
                <span className='card-explicit'
                      title='Explicit'
                >
                  E
                </span>
                <span className='card-artist truncate-text'>
                  Drake, J.Cole
                </span>
              </span>

              <span className='card-data-slot slot-1 truncate-text'>
                117,196,245
              </span>
              <span className='card-data-slot slot-2 truncate-text'>
                2023
              </span>
              <span className='card-data-slot slot-3 truncate-text'>
                4:22
              </span>
            </div>

            <div className='card-buttons'>
              <button className='card-button download'>
                <span className='card-button-span'>
                  <MdDownload className='card-button-icon' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Card;