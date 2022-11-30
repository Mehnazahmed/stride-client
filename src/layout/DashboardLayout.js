import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Shared/Navbar/Navbar';



const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>


        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">

            {
              isBuyer && <>
              <li><Link to='/dashboard'>My Bookings</Link></li>
              </>
            }
            
            
             {
              isAdmin && <>
                <li><Link to='/dashboard/users'>All Users</Link></li>
                <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
            <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                
              </>
            } 

            {
              isSeller && <>
              <li><Link to='/dashboard/myproducts'>My Products</Link></li>
              </>
            }
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;