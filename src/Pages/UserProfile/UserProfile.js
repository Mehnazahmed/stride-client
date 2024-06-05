import React, { useContext } from "react";

import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["userProfile", user?.email],
    async () => {
      const email = user?.email;
      const res = await fetch(
        `https://project-stride.vercel.app/users/${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
      return res.json();
    },
    {
      enabled: !!user?.email,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching user profile: {error.message}</div>;
  }
  const userId = userData?._id;
  console.log(userId);

  // const url = `https://project-stride.vercel.app/users/${userId}`;

  // const {
  //   data: userData,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery(["userProfile", userId], async () => {
  //   console.log({ userData: userData });
  //   const res = await fetch(url, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   });
  //   return res.data;
  // });

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <div>Error fetching user profile: {error.message}</div>;
  // }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-image">
        {userData.profileImage ? (
          <img src={userData.profileImage} alt="Profile" />
        ) : (
          <div className="placeholder-image">No Image</div>
        )}
      </div>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
      <div>
        <h3>Account Details</h3>
        <p>Role: {userData.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
