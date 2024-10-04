import React from 'react';
import treatment from '..//..//..//assets/icons/treatment 1.png';
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';

const BannerBottom = () => {
  return (
    <div className="hero lg:px-24 container mx-auto">
      <div className="md:flex items-center">
        <div className="md:w-2/4 md:px-8">
          <img src={treatment} className="p-4 md:p-0 rounded-lg lg:w-4/4" />
        </div>
        <div className="p-4 md:p-0 md:w-2/4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-accent">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
