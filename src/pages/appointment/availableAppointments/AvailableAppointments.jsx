import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../bookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Lading from '../../shared/loading/Lading';

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP');

  // const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/appoinmentOptions')
  //     .then(res => res.json())
  //     .then(data => setAppoinmentOptions(data));
  // }, []);

  // using query for fetch
  const {
    data: appoinmentOptions,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['appoinmentOptions', date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/appoinmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Lading />;
  }

  return (
    <div className="py-24">
      <div className="text-center mb-5">
        <h2 className="mb-2 text-secondary font-bold">
          Available Services on {date}
        </h2>
        <h4 className="">Please select a service.</h4>
      </div>
      <div className="mt-8 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
        {appoinmentOptions.map(option => (
          <AppointmentOption
            key={option._id}
            appoinmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {/*=====call booking modal=======  */}

      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
