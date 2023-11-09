
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

import SearchLoader from './SearchLoader';
import SearchAlert from './SearchAlert';
import './Search.css';


const Search = () => {
  const [search, setSearch] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(false);

  // handle search button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit function called');

    if (!search)
    {
      setSearch('');
    }

    console.log(search);
  }
  
  // handle Search input
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log('handleSearch function called');
  
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    setLoading(true);

    // check if the input text is a link or keyword
    if(search.includes('https://open.spotify.com/'))
    {
      console.log('its a spotify music link');
    }
    else
    {
      console.log('its a spotify music keyword');

      try
      {
        const queryData = await fetch(
          'https://api.spotify.com/v1/search?q=' + search + '&type=album,artist,playlist,track',
          searchParameters
        );
        if (queryData.ok)
        {
          const data = await queryData.json();
    
          if (data) {
            setLoading(true);
            console.log(data);
    
            return data;
          }
          else
          {
            throw new Error('Did not get the data');
          }
        }
        else
        {
          throw new Error('Failed to fetch data from Spotify API');
        }
      }
      catch (err)
      {
        setLoading(false);
        throw new Error('Oops! Unknown metadata error: ' + err.message);
      }
    }
  }

  // get API access Token
  useEffect( () => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id='
            + import.meta.env.VITE_CLIENT_ID
            + '&client_secret='
            + import.meta.env.VITE_CLIENT_SECRET
    }

    const Connect = async () => {
      try
      {
        const response = await fetch(
          'https://accounts.spotify.com/api/token',
          authParameters
        );
        const data = await response.json();
        setAccessToken(data.access_token);
        console.log('access token: ', accessToken);
      }
      catch (err)
      {
        throw new Error('OPPS! API CONNECTION ERROR: ' + err.message);
      }
    }

    Connect();
  }, []);

  return (
    <div className='search'
      id='search'
    >
      <h2>
        Input Link or Keyword
      </h2>

      <div className='search-row'>
        <div className='search-input-cont'>
          <input className='search-input'
                 id='search-input'
                 type='text'
                 placeholder='e.g. https://open.spotify.com/track/....'
                 value={search}
                 onKeyPress={ (e) => {
                  if(e.key == 'Enter')
                  {
                    handleSearch(e);
                    e.target.blur();
                    e.target.value = '';
                  }
                 }}
                onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className='search-separator'></div>
        
        <button className='search-button'
                id='search-button'
                type='submit'
                onClick={(e) => handleSearch(e)}
        >
          <BiSearch className='search-icon' />
          Search
        </button>
      </div>

      <div className='search-alert'
          //  style={{display: 'none'}}
      >
        <SearchAlert />
      </div>

      <div className='search-loader'>
      {
        loading && <SearchLoader />
      }
      </div>
      
      <div className='search-cards-container'>
      </div>
    </div>
  );
}


export default Search;