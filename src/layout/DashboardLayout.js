import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

import Navbar from "../Shared/Navbar/Navbar";
import Loading from "../Shared/Loading/Loading";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (isAdminLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/userBookings">All Bookings</Link>
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
