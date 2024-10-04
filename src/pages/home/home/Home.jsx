import React from 'react';
import HomeBanner from '../homeBanner/HomeBanner';
import InfoCards from '../infoCards/InfoCards';
import Services from '../services/Services';
import BannerBottom from '../bannerBottom/BannerBottom';
import HomeAppoinment from '../homeAppoinment/HomeAppoinment';
import Testimonial from '../testimonial/Testimonial';
import ContactUs from '../contactUs/ContactUs';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <InfoCards />
      <Services />
      <BannerBottom />
      <HomeAppoinment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
