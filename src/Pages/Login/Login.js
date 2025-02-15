import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, googleSignIn, resetPassword } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [token] = useToken(loginUserEmail);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [logInError, setLogInError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (data) => {
    try {
      console.log(data);
      setLoginError("");

      const result = await signIn(data.email, data.password);
      const user = result.user;
      console.log(user);
      setLoginUserEmail(data.email);
      toast("Logged in successfully");
    } catch (error) {
      console.log(error.message);
      setLoginError(error.message);
    }
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
        };

        // Save the user details to the backend database
        saveUser(userInfo.displayName, userInfo.email, userInfo.role);
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
        setLogInError("Error saving user data");
      });
  };

  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Reset link has been sent,please check your email");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onBlur={(event) => setUserEmail(event.target.value)}
              type="email"
              {...register("email", {
                required: "email address is required",
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
                min: 6,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <button onClick={handleReset} className="label label-text">
              Forget Password?
            </button>
          </div>

          <input
            className="btn btn-accent w-full my-5"
            value="Login"
            type="submit"
          />
          <div>{loginError && <p>{loginError}</p>}</div>
        </form>
        <p>
          New to this site?{" "}
          <Link className="text-secondary" to="/signup">
            {" "}
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
