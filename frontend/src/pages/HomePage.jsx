import React from 'react';
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';
import Categories from '../components/Route/Categories/Categories';
import BestDeals from '../components/Route/BestDeals/BestDeals';
import FeaturedProduct from '../components/Route/FeaturedProduct/FeaturedProduct';
import Events from '../components/Events/Events';
import SliderIndicatorsOutside from '../components/Route/Slider/Slider';
// import Sponsored from '../components/Route/Sponsored';
import Footer from '../components/Layout/Footer';
import SlideInOnScroll from './SlideInOnScroll'; // Import the SlideInOnScroll component

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <div className={`bg-black`}>
        <SlideInOnScroll>
          <Hero />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <Categories />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <BestDeals />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <Events />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <FeaturedProduct />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <SliderIndicatorsOutside />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <Footer />
        </SlideInOnScroll>
      </div>
    </div>
  );
};

export default HomePage;
