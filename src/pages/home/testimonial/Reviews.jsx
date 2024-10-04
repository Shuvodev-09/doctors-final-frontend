import React from 'react';

const Reviews = ({ review }) => {
  const { name, img, revie, location } = review;
  return (
    <div>
      <div className="card shadow-xl mt-10">
        <div className="card-body items-center text-center">
          <p className="text-left">{revie}</p>
        </div>

        <div className="flex items-center px-7 py-3">
          <img src={img} alt="Shoes" className="rounded-xl" />

          <div className="ms-4">
            <h2 className="font-bold">{name}</h2>
            <h2>{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
