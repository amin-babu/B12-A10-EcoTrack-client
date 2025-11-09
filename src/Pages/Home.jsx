import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import { useLoaderData } from 'react-router';

const Home = () => {
  const sliderData = useLoaderData();
  return (
    <div>
      <HeroSlider sliderData={sliderData}/>
    </div>
  );
};

export default Home;