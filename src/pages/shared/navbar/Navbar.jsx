import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = (
    <React.Fragment>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold' : 'hover:text-secondary'
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold' : 'hover:text-secondary'
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appointment"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold' : 'hover:text-secondary'
          }
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold' : 'hover:text-secondary'
          }
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold' : 'hover:text-secondary'
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold' : 'hover:text-secondary'
          }
        >
          Login
        </NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
