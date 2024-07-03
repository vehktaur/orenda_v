import React from 'react';
import './Home.css';
import Hero from './Hero/Hero';
import Network from '../Network/Network';
import Treat from '../About/Treat/Treat';
import Meet from './Meet/Meet';
import Available from './Available/Available';
import Handle from './Handle/Handle';
import Journey from './Journey/Journey';
import Location from './Location/Location';
import Providers from '../Our Team/Providers';
import Phead from './Phead/Phead';
import Hear from './Hear/Hear';
import FAQ from '../Contact Us/FAQ';

const Home = () => {
  return (
    <div className="home_container mx-auto">
      <div className="home_wrapper mx-auto">
        <Hero />
        <Network />
        <Phead />
        <Providers itemsPerPage={10} numberOfColumns={5} />
        <Meet />
        <Treat />

        <Handle />
        <Available />
        <Hear />
        <Journey />
        <Location />
        <FAQ/>
      </div>
    </div>
  );
};

export default Home;
