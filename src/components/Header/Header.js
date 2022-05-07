import React, { useState } from "react";
import logo from "../../../src/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineInventory, MdLogin } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleMobileMenu = () => {
    setVisible(!visible);
  };
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="py-3 px-3 bg-[#11141e] sticky top-0 z-50 shadow-slate-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" style={{ maxWidth: "120px" }} />
          </NavLink>
        </div>
        <div className="navigation relative">
          <span
            onClick={handleMobileMenu}
            className="text-white text-3xl md:hidden"
          >
            {!visible ? <RiMenu3Fill></RiMenu3Fill> : <CgClose></CgClose>}
          </span>
          <ul
            className={`${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3 hidden md:flex"
            } md:translate-y-0 px-5 py-10 md:p-0 rounded w-56 shadow-lg md:shadow-none  md:w-auto transition-all bg-[#ffffffeb] backdrop-blur-sm md:bg-transparent absolute right-0 top-10 md:static md:opacity-100 flex flex-col md:flex-row items-start justify-right gap-6 md:gap-8 text-md font-normal md:text-white text-black`}
          >
            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "md:text-indigo-400 flex items-center gap-1"
                      : "md:hover:text-indigo-400 flex items-center gap-1"
                  }
                  to="/add-item"
                >
                  Add Item <AiOutlinePlus className="text-lg"></AiOutlinePlus>
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:text-indigo-400 flex items-center gap-1"
                    : "md:hover:text-indigo-400 flex items-center gap-1"
                }
                to="/manage-inventories"
              >
                Manage Inventories
                <MdOutlineInventory className="text-lg"></MdOutlineInventory>
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "md:text-indigo-400 flex items-center gap-1"
                      : "md:hover:text-indigo-400 flex items-center gap-1"
                  }
                  to="/my-items"
                >
                  My Items
                  <AiOutlineUnorderedList className="text-lg"></AiOutlineUnorderedList>
                </NavLink>
              </li>
            )}

            <li>
              {user ? (
                <button
                  onClick={logout}
                  className="hover:text-indigo-400 hover:underline"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "md:text-indigo-400 flex items-center gap-1"
                      : "md:hover:text-indigo-400 flex items-center gap-1"
                  }
                  to="/login"
                >
                  Login
                  <MdLogin className="text-lg"></MdLogin>
                </NavLink>
              )}
            </li>
            {!user && (
              <li>
                <NavLink
                  className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-3 rounded-lg"
                  to="/sign-up"
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
