import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

import Navbar from "../Shared/Navbar/Navbar";
import Loading from "../Shared/Loading/Loading";

const UserDashboardLayout = () => {
  const { user } = useContext(AuthContext);

  //   if (user) {
  //     return (
  //       <div>
  //         <Loading />
  //       </div>
  //     );
  //   }

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
          <ul className="menu p-4 w-80 text-base-content mt-10">
            {user && (
              <>
                <li>
                  <Link to="/userDashboard/userProfile">My Profile</Link>
                </li>
                <li>
                  <Link to="/userDashboard/mybookings">My Bookings</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
