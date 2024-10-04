import React from 'react';
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';
import chair from '..//..//..//assets/images/chair 1.png';
import bannerbg from '..//..//..//assets/images/landing-bg.png';

const HomeBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="hero px-2 md:py-24"
    >
      <div className="hero-content gap-10 flex-col lg:flex-row-reverse container">
        <img src={chair} className="md:w-[700px] rounded-lg" />
        <div className='px-2 '>
          <h1 className="text-2xl md:text-5xl font-bold text-accent">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet
            voluptatum vel ut soluta atque eveniet quas, ab eligendi, sequi
            ipsum praesentium sunt dolor!
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
