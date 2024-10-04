import React from 'react';
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';

const AppointmentOption = ({ appoinmentOption }) => {
  const { name, slots } = appoinmentOption;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary mb-2">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Please try another day'} </p>
          <p className="mt-0 mb-4">
            {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
          </p>
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
