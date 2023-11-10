
import React from 'react';
import {
  MdErrorOutline,
  MdWarningAmber,
  MdCheckCircle
} from 'react-icons/md';

import './Search.css';


const SearchAlert = ({ message, type }) => {

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <MdErrorOutline className='search-alert-icon' />;
      case 'warning':
        return <MdWarningAmber className='search-alert-icon' />;
      case 'success':
        return <MdCheckCircle className='search-alert-icon' />;
      default:
        return null;
    }
  };

  return (
    <small>
      <p>
        { getIcon() }
        { message }
      </p>
    </small>
  );
}


export default SearchAlert;