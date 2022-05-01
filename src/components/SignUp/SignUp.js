// import SocialLogin from "../SocialLogin/SocialLogin";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [pass, conPass] = watch(["password", "confirmPassword"]);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = async (data) => {
    if (pass === conPass) {
      const { displayName, email, password } = data;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
      await sendEmailVerification();
    }
  };
  if (user) {
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
            <h1 className="text-3xl">Sign Up</h1>
            <p className="text-slate-500">
              Sign up to manage your inventories!
            </p>
          </div>
          <GoogleLogin></GoogleLogin>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            action=""
            className="text-right flex flex-col gap-2"
          >
            <input
              {...register("displayName", { required: "Name is required!" })}
              className="py-3 px-5 border-none focus:outline-0 outline-none bg-[#deecff] text-black rounded w-full"
              type="text"
              name="displayName"
              placeholder="Your Name..."
            />
            {errors.displayName?.message && (
              <p className="text-red-500 text-left mb-2">
                {errors.displayName?.message}
              </p>
            )}
            <input
              {...register("email", { required: "Email is required!" })}
              className="py-3 px-5 border-none focus:outline-0 outline-none bg-[#deecff] text-black rounded w-full"
              type="email"
              name="email"
              placeholder="Your Email..."
            />
            {error?.message ===
              "Firebase: Error (auth/email-already-in-use)." && (
              <p className="text-red-500 text-left mb-2">
                Email already in use!
              </p>
            )}
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
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password!",
              })}
              className="py-3 px-5 border-none focus:outline-0 bg-[#deecff] text-black rounded w-full"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password..."
            />
            {conPass === "" ? (
              ""
            ) : conPass === undefined ? (
              ""
            ) : conPass !== pass ? (
              <p className="text-red-500 text-left mb-2">
                Password Doesn't Match
              </p>
            ) : conPass === pass ? (
              <p className="text-green-600 text-left mb-2">Password Matched!</p>
            ) : (
              ""
            )}

            <div className=" flex justify-between items-center mt-2 mb-10">
              <Link
                to="/login"
                className="flex items-center gap-3 text-slate-600 hover:text-indigo-700 hover:underline"
              >
                <BsArrowLeft className="text-xl"></BsArrowLeft> Back to login?
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

export default SignUp;
