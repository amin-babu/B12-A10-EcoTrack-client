import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import { useLoaderData } from 'react-router';
import LiveStats from '../Components/LiveStats';
import ActiveChallenges from '../Components/ActiveChallenges';
import RecentTips from '../Components/RecentTips';
import UpcomingEvents from '../Components/UpcomingEvents';
import WhyGoGreen from '../Components/WhyGoGreen';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
  const { heroSlide } = useLoaderData();
  return (
    <div>
      <HeroSlider heroSlide={heroSlide} />
      <LiveStats />
      <ActiveChallenges />
      <RecentTips />
      <UpcomingEvents />
      <WhyGoGreen />
      <HowItWorks/>
    </div>
  );
};

export default Home;