import React from 'react';
import fluoride from '..//..//..//assets/icons/fluoride 1.png';
import cavity from '..//..//..//assets/icons/cavity 1.png';
import whitening from '..//..//..//assets/icons/whitening 1.png';
import Service from './Service';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: fluoride,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: cavity,
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: whitening,
    },
  ];
  return (
    <div className="my-28 container">
      <div className="text-center mb-5">
        <h2 className="mb-2 text-secondary font-bold">OUR SERVICES</h2>
        <h4 className="text-4xl">Services We Provide</h4>
      </div>
      <div className="mt-8 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData.map(service => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
