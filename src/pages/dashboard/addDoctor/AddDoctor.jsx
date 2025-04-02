import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Lading from './../../shared/loading/Lading';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = data => {
    if (!data.image) {
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('speciality', data.speciality);
    formData.append('image', data.image[0]);

    fetch('http://localhost:3000/doctors', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Doctor added successfully');
        }
      })
      .catch(error => {
        console.log('Doctor:', error);
      });
  };

  const {
    data: specialities,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['appoinmentSpeciality'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/appoinmentSpeciality');
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Lading />;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Add a New Doctor</h1>
      <div className="">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-6">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h3 className="text-center text-xl font-mono">SIGN UP</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register('name', { required: true })}
                type="text"
                placeholder="enter your name"
                className="input input-bordered focus:outline-none"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name?.type === 'required' && (
                <p role="alert" className="text-red-600">
                  Name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register('email', {
                  required: 'Email Address is required',
                })}
                type="email"
                placeholder="enter your email"
                className="input input-bordered focus:outline-none"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p role="alert" className="text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
              <select
                {...register('speciality')}
                className="select select-bordered w-full"
              >
                {specialities.map((speciality, i) => (
                  <option key={i} value={speciality.name}>
                    {speciality.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">File</span>
              </label>
              <input
                {...register('image', {
                  required: 'image is required',
                })}
                accept="image/*"
                type="file"
                placeholder="enter your picture"
                className="input input-bordered focus:outline-none"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.image && (
                <p role="alert" className="text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-accent"
                type="submit"
                value="ADD DOCTOR"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
