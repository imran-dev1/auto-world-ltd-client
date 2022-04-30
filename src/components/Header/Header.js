import React, { useState } from "react";
import logo from "../../../src/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { signOut } from "firebase/auth";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleMobileMenu = () => {
    setVisible(!visible);
  };
  //   const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    // signOut(auth);
    navigate("/login");
  };
  return (
    <div className="py-3 px-3 bg-white sticky top-0 z-50 shadow-lg shadow-slate-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" style={{ maxWidth: "150px" }} />
          </NavLink>
        </div>
        <div className="navigation relative">
          <span
            onClick={handleMobileMenu}
            className="text-black text-3xl md:hidden"
          >
            {!visible ? <RiMenu3Fill></RiMenu3Fill> : <CgClose></CgClose>}
          </span>
          <ul
            className={`${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3 hidden md:flex"
            } md:translate-y-0 px-5 py-10 md:p-0 rounded w-52 shadow-lg md:shadow-none  md:w-auto transition-all bg-[#ffffffa1] backdrop-blur-sm md:bg-transparent absolute right-0 top-10 md:static md:opacity-100 flex flex-col md:flex-row items-start justify-right gap-4 md:gap-8 text-gray-600`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 underline flex items-center gap-1"
                    : "hover:text-indigo-800 hover:underline flex items-center gap-1"
                }
                to="/add-item"
              >
                Add Item <AiOutlinePlus className="text-xl"></AiOutlinePlus>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 underline"
                    : "hover:text-indigo-800 hover:underline"
                }
                to="/manage-inventories"
              >
                Manage Inventories
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 underline"
                    : "hover:text-indigo-800 hover:underline"
                }
                to="/my-items"
              >
                My Items
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 underline"
                    : "hover:text-indigo-800 hover:underline"
                }
                to="/login"
              >
                Login
              </NavLink>

              {/* <button
                onClick={logout}
                className="hover:text-indigo-800 hover:underline"
              >
                Logout
              </button> */}
            </li>
            <li>
              <NavLink
                className="bg-indigo-800 text-white py-2 px-3 rounded-lg"
                to="/my-items"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
