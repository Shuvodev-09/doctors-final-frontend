import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  useEffect(() => {
    fetch('appoinmentOptions.json')
      .then(res => res.json())
      .then(data => setAppoinmentOptions(data));
  }, []);
  return (
    <div className="py-24">
      <div className="text-center mb-5">
        <h2 className="mb-2 text-secondary font-bold">
          Available Services on {format(selectedDate, 'PP')}
        </h2>
        <h4 className="">Please select a service.</h4>
      </div>
      <div className="mt-8 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
        {appoinmentOptions.map(option => (
          <AppointmentOption
            key={option._id}
            appoinmentOption={option}
          ></AppointmentOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
