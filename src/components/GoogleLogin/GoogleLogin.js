import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="flex justify-center flex-col items-center">
      <button
        onClick={() => signInWithGoogle()}
        className="flex justify-center items-center gap-3 text-black py-2 px-4 shadow hover:shadow-md hover:scale-[1.02] transition-all border rounded"
      >
        <FcGoogle className="text-3xl"></FcGoogle> Continue with Google
      </button>
      <div className="my-5 flex items-center gap-3 text-lg">
        <div className=" h-[2px] w-10 bg-slate-200"></div> or
        <div className=" h-[2px] w-10 bg-slate-200"></div>
      </div>
    </div>
  );
};

export default GoogleLogin;
