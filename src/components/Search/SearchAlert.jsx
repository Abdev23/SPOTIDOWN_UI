
import React from 'react';
import {
  MdErrorOutline,
  MdWarningAmber,
  MdCheckCircle
} from 'react-icons/md';

import './Search.css';


const SearchAlert = () => {
  return (
    <small>
      <p>
        <MdWarningAmber className='search-alert-icon' />
        Notification Alert
      </p>
    </small>
  );
}


export default SearchAlert;