import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { useForm } from "react-hook-form";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, , loading, loginError] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    fetch("https://auto-world026.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
      });
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-end md:gap-20">
        <div className="text-black bg-white p-5 md:p-10 w-full max-w-md rounded-lg my-20 shadow-2xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl">Login</h1>
            <p className="text-slate-500">Login to manage your inventories!</p>
          </div>
          <GoogleLogin></GoogleLogin>
          <form
            onSubmit={handleSubmit(handleLogin)}
            action=""
            className="text-right flex flex-col gap-2"
          >
            {loginError && (
              <p className="text-red-500 text-left mb-2">
                Please check email & password!
              </p>
            )}
            <input
              {...register("email", { required: "Email is required!" })}
              className="py-3 px-5 border-none focus:outline-0 outline-none bg-[#deecff] text-black rounded w-full"
              type="email"
              name="email"
              placeholder="Your Email..."
            />
            {errors.email?.message && (
              <p className="text-red-500 text-left mb-2">
                {errors.email?.message}
              </p>
            )}
            <input
              {...register("password", {
                required: "Password is required!",
              })}
              className="py-3 px-5 border-none focus:outline-0 bg-[#deecff] text-black rounded w-full"
              type="password"
              name="password"
              placeholder="Your Password..."
            />
            {errors.password?.message && (
              <p className="text-red-500 text-left mb-2">
                {errors.password?.message}
              </p>
            )}
            <div className=" flex justify-between items-center mt-2 mb-10">
              <Link
                to="/sign-up"
                className="flex items-center gap-3 text-slate-600 hover:text-indigo-700 hover:underline"
              >
                <BsArrowLeft className="text-xl"></BsArrowLeft> New Member?
              </Link>
              <Link
                to="/reset-password"
                className="text-slate-600 hover:text-indigo-700 hover:underline"
              >
                Forget Password?
              </Link>
            </div>
            <input
              className="cursor-pointer bg-indigo-700 hover:bg-indigo-600 hover:shadow-md text-white px-6 py-3 rounded-full"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
