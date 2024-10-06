import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const { name } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = data => {};

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center pb-32">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-32">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <h3 className="text-center text-xl font-mono">LOGIN {name}</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register('email', { required: 'Email Address is required' })}
              type="email"
              placeholder="email"
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
              <span className="label-text">Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                {...register('password', {
                  required: 'Password is required',
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                className="input input-bordered w-full focus:outline-none"
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <IoEye /> : <IoEyeOff />}
              </button>
            </div>
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password.message}
              </p>
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="LOGIn" className="btn btn-accent" />
          </div>
          <label className="text-center">
            <Link to="/sign-up" className="label-text-alt link link-hover">
              New to Doctors Portal?
              <span className="text-secondary">Create new account</span>
            </Link>
          </label>
          <div className="divider divider-primary">OR</div>
          <div className="form-control">
            <button className="btn btn-primary btn-outline">
              Continue With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
