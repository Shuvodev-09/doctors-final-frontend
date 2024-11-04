import React from 'react';
import Lading from '../../../shared/loading/Lading';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/users');
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
    })
      .then(res => res.json())
      .then(data => console.log(data));
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
              <th>Service</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-accent text-white btn-sm"
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button className="btn btn-error text-white btn-sm">
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

export default AllUsers;
