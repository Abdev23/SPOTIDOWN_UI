
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

import SearchLoader from './SearchLoader';
import SearchAlert from './SearchAlert';
import './Search.css';


const Search2 = () => {
  const [search, setSearch] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    msg: '',
    type: '',
    show: false
  });
  
  // handle Search input
  const handleSearch = async () => {
    if (!search)
    {
      setAlert({ msg: 'Please enter a search query.', type: 'warning', show: true });
      return;
    }

    console.log('this is the search value: ', search);
  
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    setLoading(true);

    // check if the input text is a link or keyword
    if (search.includes('https://open.spotify.com/'))
    {
      return;
    }
    else
    {
      try
      {
        const queryData = await fetch(
          'https://api.spotify.com/v1/search?q=' + search + '&type=album,artist,playlist,track',
          searchParameters
        );
        if (queryData.ok)
        {
          const data = await queryData.json();
    
          if (data &&
              (data.albums.items.length > 0 ||
              data.artists.items.length > 0 ||
              data.playlists.items.length > 0 ||
              data.tracks.items.length > 0))
          {
            setLoading(false);
            setAlert({ msg: 'Founded some music for you!', type: 'success', show: true });
            setSearch('');
            console.log('data is full: ', data);
    
            return data;
          }
          else
          {
            setLoading(false);
            setAlert({ msg: 'No results found. Check your spelling.', type: 'info', show: true });
            return;
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
        let errorMessage = '';
        if (err instanceof TypeError) {
          errorMessage = 'Oops! Network error occurred. Please check your internet connection.';
        } else {
          errorMessage = 'Oops! Error occurred while fetching data. Please try again later.';
        }
        setAlert({ msg: errorMessage, type: 'error', show: true });
        throw new Error('Oops! Error occurred while fetching data: ' + err.message);
      }
    }
  }

  // reset the alert component to default state
  useEffect( () => {
    const resetAlert = setTimeout(() => {
      setAlert({ msg: '', type: '', show: false });
    }, 5000);

    return () => {
      clearTimeout(resetAlert);
    };
  }, [alert])

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
        // console.log('access token: ', data.access_token);
      }
      catch (err)
      {
        setAccessToken('');
        setAlert({
          msg: 'OPPS! API CONNECTION ERROR',
          type: 'error',
          show: true
        });
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
                    handleSearch();
                    // setSearch('');
                    e.target.blur();
                  }
                 }}
                onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className='search-separator'></div>
        
        <button className='search-button'
                id='search-button'
                type='submit'
                onClick={handleSearch}
        >
          <BiSearch className='search-icon' />
          Search
        </button>
      </div>

      <div className={`search-alert ${alert.show ? 'show' : ''} ${alert.type}`}>
        {
          alert.show && <SearchAlert message={alert.msg} type={alert.type} />
        }
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


export default Search2;