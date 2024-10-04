import React from 'react';
import people from '../../../assets/icons/people1.png';
import quote from '../../../assets/images/Mask Group 7@2x 1.png';

import Reviews from './Reviews';

const Testimonial = () => {
  const reviewData = [
    {
      id: 1,
      name: 'Winson Herry',
      img: people,
      revie:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'Calofornia',
    },
    {
      id: 2,
      name: 'Winson Herry',
      img: people,
      revie:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'Calofornia',
    },
    {
      id: 3,
      name: 'Winson Herry',
      img: people,
      revie:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'Calofornia',
    },
  ];
  return (
    <div className="my-28 container mx-auto">
      <div className="flex justify-between">
        <div>
          <h2 className="mb-2 text-secondary font-bold">Testimonial</h2>
          <h4 className="text-4xl">What Our Patients Says</h4>
        </div>
        <div className="flex justify-end">
          <img className="w-3/5" src={quote} alt="e" />
        </div>
      </div>
      <div className="mt-8 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviewData.map(review => (
          <Reviews key={review.id} review={review}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
