import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PK);

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
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
