import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
  const booking = useLoaderData();
  const { email, patient, price, slot, appoinmentDate, treatment } = booking;

  return (
    <div>
      <h2 className="text-3xl pb-2">
        Payment for <span className="text-teal-600">{treatment}</span>
      </h2>
      <p>
        Please pay <b className="text-red-500">{price}</b> for your appointment
        on <b>{appoinmentDate}</b>
        at <b>{slot}</b>
      </p>
    </div>
  );
};

export default Payment;
