
import React, { useState, useEffect } from 'react';


// get API access Token
const useConnect = (authParameters, url) => {
  useEffect( () => {
    const Connect = async () => {
      try
      {
        const response = await fetch(
          url,
          authParameters
        );
        const data = await response.json();
        setAccessToken(data.access_token);
        console.log('access token: ', data.access_token);
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
}


export default useConnect;