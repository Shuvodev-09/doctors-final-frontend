import React from 'react';
import doctor from '..//..//..//assets/images/doctor-small 1.png';
import docbg from '..//..//..//assets/images/bg-blue 1.png';
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';

const HomeAppoinment = () => {
  return (
    <div className="mt-5 md:mt-72">
      <div
        style={{
          backgroundImage: `url(${docbg})`,
          backgroundSize: 'cover',
        }}
        className="hero"
      >
        <div className="hero-content p-0 flex-col lg:flex-row">
          <img
            src={doctor}
            className="hidden md:block -mt-24 lg:w-2/5 rounded-lg"
          />
          <div className="text-white p-8">
            <h3 className="text-secondary mb-5 font-bold">Appointment</h3>

            <h1 className="text-5xl md:text-5xl font-bold">
              Make an appointment Today
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton className="btn btn-primary">
              GET STRATED
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppoinment;
