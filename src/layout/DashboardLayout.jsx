import React, { useContext } from 'react';
import Navbar from '../pages/shared/navbar/Navbar';
import { Link, Outlet, useLocation } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
  const location = useLocation();

  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
  return (
    <div>
      <Navbar />

      {/*  */}
      <div className="drawer lg:drawer-open">
        <input id="dasboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-12 bg-[#F1F5F9]">
          {/* ======Page content here====== */}
          <Outlet />
          <label
            htmlFor="dasboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dasboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-base-content w-80 p-0">
            {/*=========Sidebar content here====== */}
            <li
              className={`${
                location.pathname === '/dashboard' ? 'bg-blue-200' : ''
              } hover:bg-blue-100`}
            >
              <Link to="/dashboard" className="w-full h-full block p-4">
                My Appointments
              </Link>
            </li>
            {isAdmin && (
              <>
                <li
                  className={`${
                    location.pathname === '/dashboard/all-users'
                      ? 'bg-blue-200'
                      : ''
                  } hover:bg-blue-100`}
                >
                  <Link
                    to="/dashboard/all-users"
                    className="w-full h-full block p-4"
                  >
                    All Users
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === '/dashboard/add-doctor'
                      ? 'bg-blue-200'
                      : ''
                  } hover:bg-blue-100`}
                >
                  <Link
                    to="/dashboard/add-doctor"
                    className="w-full h-full block p-4"
                  >
                    Add A Doctor
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === '/dashboard/manage-doctor'
                      ? 'bg-blue-200'
                      : ''
                  } hover:bg-blue-100`}
                >
                  <Link
                    to="/dashboard/manage-doctor"
                    className="w-full h-full block p-4"
                  >
                    Manage Doctor
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
