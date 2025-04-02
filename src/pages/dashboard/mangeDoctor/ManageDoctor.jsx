import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Lading from '../../shared/loading/Lading';
import toast from 'react-hot-toast';

const ManageDoctor = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/doctors');
      const data = await res.json();
      return data;
    },
  });

  const handleDoctorDelete = id => {
    fetch(`http://localhost:3000/doctors/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success('Doctor deleted successfully');
        }
        refetch();
      });
  };

  if (isLoading) {
    return <Lading />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">All Users</h1>

      <div className="overflow-x-auto">
        <table className="table w-full bg-white mt-6">
          {/* head */}
          <thead className="bg-gray-200">
            <tr className="text-black">
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length === 0 && (
              <h1 className="text-xl text-red-500">No doctors manage here</h1>
            )}
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>

                <td>
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={`data:image/png;base64,${doctor.image}`}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleDoctorDelete(doctor._id)}
                    className="btn btn-error text-white btn-sm"
                  >
                    Remove User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
