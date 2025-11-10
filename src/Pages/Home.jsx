import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import { useLoaderData } from 'react-router';
import LiveStats from '../Components/LiveStats';
import ActiveChallenges from '../Components/ActiveChallenges';

const Home = () => {
  const {heroSlide} = useLoaderData();
  return (
    <div>
      <HeroSlider heroSlide={heroSlide} />
      <LiveStats />
      <ActiveChallenges />
    </div>
  );
};

export default Home;