import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from './../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, 'PP');

  const { user } = useContext(AuthContext);

  const handleBooking = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const number = form.number.value;
    const booking = {
      appoinmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      number,
      email,
      price,
    };

    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking confirmed successfuly');
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <form onSubmit={handleBooking} className="modal-box">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{treatmentName}</h3>

            <label
              htmlFor="booking-modal"
              className="btn btn-circle btn-accent btn-sm text-white"
            >
              X
            </label>
          </div>

          <div className="mt-2 mb-5">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full mt-3">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder="full name"
              className="input input-bordered w-full mt-3"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              placeholder="email here"
              className="input input-bordered w-full mt-3"
            />
            <input
              type="number"
              name="number"
              value={user?.phone}
              placeholder="phone number"
              required
              className="input input-bordered w-full mt-3"
            />
          </div>

          <input
            type="submit"
            value="SUBMIT"
            className="btn btn-accent w-full"
          />
        </form>
      </div>
    </>
  );
};

export default BookingModal;
