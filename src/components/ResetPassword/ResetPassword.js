import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const handleResetPassword = (data) => {
    const { email } = data;
      sendPasswordResetEmail(email); 
      reset();
    toast.success("Please check your inbox to reset password!");
  };
    if (error) {
        return <p>Error: {error.message}</p>
    }
  return (
    <div className="px-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-end md:gap-20">
        <div className="text-black bg-white p-5 md:p-10 w-full max-w-md rounded-lg my-20 shadow-2xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl">Reset Password</h1>
          </div>
          <ToastContainer></ToastContainer>
          <form
            onSubmit={handleSubmit(handleResetPassword)}
            action=""
            className="text-right flex flex-col gap-2"
          >
            <input
              {...register("email", { required: "Email is required!" })}
              className="py-3 px-5 border-none focus:outline-0 outline-none bg-[#deecff] text-black rounded w-full"
              type="email"
              name="email"
              placeholder="Your Email..."
            />
            {errors.email?.message && (
              <p className="text-red-500 text-left">
                {errors.email?.message}
              </p>
            )}
            <div className=" flex justify-between items-center mt-2 mb-6">
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
              value={sending ? "Sending..." : "Reset"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
