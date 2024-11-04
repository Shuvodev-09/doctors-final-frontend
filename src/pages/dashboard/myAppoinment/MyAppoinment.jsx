import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Lading from '../../shared/loading/Lading';

const MyAppoinment = () => {
  const { user } = useContext(AuthContext);

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Lading />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">My Appointment {bookings.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full bg-white mt-6">
          {/* head */}
          <thead className="bg-gray-200">
            <tr className="text-black">
              <th>Serial</th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
