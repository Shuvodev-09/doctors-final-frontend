import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // get context
  const { createUser, updateUser } = useContext(AuthContext);
  // single error
  const [signUpError, setSignUpError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = data => {
    setSignUpError('');

    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });
        const updatingUser = {
          displayName: data.name,
        };
        updateUser(updatingUser)
          .then(() => {
            savedUserDB(data.name, data.email);
          })
          .catch(error => {
            setSignUpError(error.message);
          });
      })
      .catch(error => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const savedUserDB = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Account created successfuly');
          refetch();
        } else {
          toast.error('Failed to create account');
        }
      });
  };

  return (
    <div className="flex justify-center pb-32">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-32">
        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
          <h3 className="text-center text-xl font-mono">SIGN UP</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="name"
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
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                  pattern: {
                    value:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                    message:
                      'Password must contain at least one uppercase letter, lower case letter, one digit, and special character',
                  },
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
              <p role="alert" className="text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {signUpError && <p className="text-red-600">{signUpError}</p>}

          <div className="form-control mt-6">
            <input className="btn btn-accent" type="submit" value="SIGN UP" />
          </div>
          <label className="text-center">
            <Link to="/login" className="label-text-alt link link-hover">
              Already have an account?{' '}
              <span className="text-secondary">Please Login</span>
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

export default SignUp;
