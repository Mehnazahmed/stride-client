import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import Loading from "../../Shared/Loading/Loading";

const UserBookings = () => {
  const url = "https://project-stride.vercel.app/bookings";

  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
  } = useQuery(["bookings"], async () => {
    const res = await fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch bookings");
    }
    return res.json();
  });

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching bookings: {error.message}</div>;
  }

  // Ensure bookings is an array
  if (!Array.isArray(bookings)) {
    return <div>Error: Bookings data is not in the expected format.</div>;
  }
  return (
    <div>
      <h2 className="text-3xl mb-5">User Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Product_Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.product}</td>
                <td>{booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBookings;
