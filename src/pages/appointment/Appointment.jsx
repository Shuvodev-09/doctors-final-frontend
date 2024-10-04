import React, { useState } from 'react';
import AppointmentBanner from './appoinmentBanner/AppointmentBanner';
import AvailableAppointments from './availableAppointments/AvailableAppointments';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointments selectedDate={selectedDate} />
    </div>
  );
};

export default Appointment;
