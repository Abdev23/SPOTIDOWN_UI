
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

import SearchLoader from './SearchLoader';
import SearchAlert from './SearchAlert';
import Card from '../Card/Card';
import useConnect from '../../hooks/useConnect';
import './Search.css';


const Search3 = () => {
  const [search, setSearch] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    msg: '',
    type: '',
    show: false
  });
  const accessToken = useConnect(setAlert);

  const handleSearchResults = (data) => {
    if (typeof data.id === 'string' ||
        (data &&
        (data.albums.items.length > 0 ||
        data.artists.items.length > 0 ||
        data.playlists.items.length > 0 ||
        data.tracks.items.length > 0)))
    {
      setLoading(false);
      setAlert({ msg: 'Found some music for you!', type: 'success', show: true });
      console.log('Data Exist: ', data);
      
      // Update the logic to handle the search results as needed
      setMetadata(data);
      return data;
    }
    else
    {
      setLoading(false);
      setAlert({ msg: 'No results found. Check your spelling.', type: 'info', show: true });
      return;
    }
  };

  const handleSearchError = (err) => {
    setLoading(false);
    let errorMessage = '';
    if (err instanceof TypeError)
    {
      errorMessage = 'Oops! Network error occurred. Please check your internet connection.';
    }
    else
    {
      errorMessage = 'Oops! Error occurred while fetching data. Please try again later.';
    }
    setAlert({ msg: errorMessage, type: 'error', show: true });
    console.error(err);
    throw new Error(errorMessage + err.message);
  };

  const getLinkType = (link) => {
    if (link.includes('https://open.spotify.com/track/'))
      return 'track';
    else if (link.includes('https://open.spotify.com/album/'))
      return 'album';
    else if (link.includes('https://open.spotify.com/playlist/'))
      return 'playlist';
    else if (link.includes('https://open.spotify.com/artist/'))
      return 'artist';
    else
    {
      throw new Error('Invalid Spotify link');
    }
  };

  const getLinkId = (link) => {
    const parts = link.split('/');
    return parts[parts.length - 1];
  };

  const fetchAPIData = async (base, searchParameters) => {
    let link = '';
    if (base.includes('https://open.spotify.com/'))
    {
      // Handle Spotify link
      const linkType = getLinkType(base);
      link += `https://api.spotify.com/v1/${linkType}s/${getLinkId(base)}`
    }
    else
    {
      // Handle Spotify keyword
      link += `https://api.spotify.com/v1/search?q=${base}&type=album,artist,playlist,track`;
    }
    
    const response = await fetch(link, searchParameters);
    if (response.ok)
    {
      return await response.json();
    }
    else
    {
      throw new Error('Failed to fetch data from Spotify API');
    }
  }

  // handle Search input
  const handleSearch = async () => {
    if (!search)
    {
      setAlert({ msg: 'Please enter a search query.', type: 'warning', show: true });
      setMetadata(null);
      return;
    }

    console.log('Query Search value: ', search);

    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    };

    setLoading(true);

    try
    {
      const data = await fetchAPIData(search, searchParameters);
      handleSearchResults(data);
    }
    catch (err)
    {
      handleSearchError(err);
    }
  };

  // reset the Alert to default state
  useEffect( () => {
    const resetAlert = setTimeout(() => {
      setAlert({ msg: '', type: '', show: false });
    }, 5000);

    return () => {
      clearTimeout(resetAlert);
    };
  }, [alert])

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
                    setSearch('');
                    e.target.blur();
                  }
                 }}
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleSearch();
                }}
          />
        </div>

        <div className='search-separator'></div>
        
        <button className='search-button'
                id='search-button'
                type='button'
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
        {
          metadata && <Card metadata={metadata} />
        }
      </div>
    </div>
  );
};


export default Search3;