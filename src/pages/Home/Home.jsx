
import React from 'react';

import Hero from '../../components/Hero/Hero';
import Why from '../../components/Why/Why';
import './Home.css';


const Home = () => {

  return (
    <div className='home'>
      <main> 
				<Hero />
				<Why />
      </main>
    </div>
  )
}


export default Home;