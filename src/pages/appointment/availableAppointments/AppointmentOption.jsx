import React from 'react';

const AppointmentOption = ({ appoinmentOption, setTreatment }) => {
  const { name, slots, price } = appoinmentOption;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary mb-2">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Please try another day'} </p>
          <p className="mt-0">
            {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
          </p>

          <p className="mt-0 mb-3 font-semibold">Price : {price}</p>

          <label
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white"
            onClick={() => setTreatment(appoinmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
