import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    console.log(data);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const imageUrl = imgData.data.url;

          // Attempt to create a user with the provided email, password, and role
          createUser(data.email, data.password, data.role)
            .then((result) => {
              const user = result.user;
              console.log(user);
              navigate("/");
              toast("User created successfully");

              const userInfo = {
                displayName: data.name,
                profileImage: imageUrl, // Save the image URL in user's profile
              };

              // Update user profile with display name and image URL
              updateUser(userInfo)
                .then(() => {
                  // Save the user details to the backend database
                  saveUser(
                    data.name,
                    data.email,
                    data.role,
                    userInfo.profileImage
                  );
                })
                .catch((err) => console.log(err));
            })
            .catch((error) => {
              console.log(error);
              setSignUpError(error.message);
            });
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setSignUpError("Error uploading image");
      });
  };

  // Function to handle Google Sign-In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Google sign-in successful");

        const userInfo = {
          displayName: user.displayName,
          email: user.email,
          role: "user",
          profileImage: user.photoURL,
        };

        // Save the user details to the backend database
        saveUser(
          userInfo.displayName,
          userInfo.email,
          userInfo.role,
          userInfo.profileImage
        );
      })
      .catch((err) => {
        console.error(err);
        toast("Google sign-in failed");
      });
  };

  // Function to save user information to the database
  const saveUser = (name, email, role) => {
    const user = { name, email, role };

    fetch("https://project-stride.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      })
      .catch((err) => {
        console.log("Error saving user:", err);
        setSignUpError("Error saving user data");
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Sign up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 characters",
                },
                pattern: {
                  value:
                    /(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])[a-zA-Z0-9- ?!@#$%^&*\/\\]/,
                  message: "password must be strong",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <select
            {...register("role")}
            className="input input-bordered w-full max-w-xs"
          >
            <option value="user">User</option>
          </select>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "photo is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full my-5"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-500">{signUpError}</p>}
        </form>
        <p>
          Already Have an Account{" "}
          <Link className="text-secondary" to="/login">
            {" "}
            Please Log in
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full" onClick={handleGoogleSignIn}>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
