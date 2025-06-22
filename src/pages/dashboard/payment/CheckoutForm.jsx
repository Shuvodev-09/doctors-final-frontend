import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;

  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create paymentIntent as soon as the page load
    fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setErrorMessage(error.message);
    } else {
      setErrorMessage('');
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });
    if (confirmError) {
      setErrorMessage(confirmError.message);
      return;
    }
    if (paymentIntent.status === 'succeeded') {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch('http://localhost:3000/payments', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(payment),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            setSuccess('congratulations! your payment is done');
            setTransactionId(paymentIntent.id);
          }
        });
    }
  };
  return (
    <>
      <form className="w-[520px] pt-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '20px',
                color: '#424770',
                '::placeholder': {
                  color: '#3f5749',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary mt-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
        {success && (
          <div>
            <p className="mt-4 text-xl uppercase font-serif text-success">{success}</p>
            <p>
              <b>{transactionId}</b>
            </p>
          </div>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
