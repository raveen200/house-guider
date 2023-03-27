import React from "react";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import Logo from "../assets/images/logoA.png";
import { MdLocationOn, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, firestore } from "../../firebase.config";
import { AiOutlineEye } from "react-icons/ai";

import { motion } from "framer-motion";
import UserDp from "../assets/images/avatar-man.png";

import { actionTypes } from "../context/reducer";
import { UseStateValue } from "../context/StateProvider";
import { getAllUsers, saveUser } from "../../utils/firebaseFunctions";

export const Nav = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = UseStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionTypes.SET_USER,
        user: providerData[0],
      });

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  if (user) {
    const udata = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    };
    saveUser(udata);
  }

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
    // const history = useHistory();
    // history.push('/');
  };

  //  console.log(user);

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-green-50 ">
      {/**/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="max-h-12 object-cover " alt="logo" />
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-12"
          >
            {/* <li className="text-base text-textColor hover:text-headingColor  cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li> */}
            {/* <li className="text-base text-textColor hover:text-headingColor  cursor-pointer">
              Menu
            </li> */}
            {/* <li className="text-base text-textColor hover:text-headingColor  cursor-pointer">
              <Link to={"/"}>About Us</Link>
            </li> */}

           {!user && (

          

           
              <li className="text-base text-textColor hover:text-headingColor  cursor-pointer">
                <Link to={"/login"}>Sign in</Link>
              </li>
               )
}
           
              
        
          </motion.ul>

          {/* <div className="relative flex items-center justify-center">
            <MdLocationOn className="text-color text-2xl  cursor-pointer " />
            <div className="absolute -top-2.5 -right-1.5 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-center text-sm text-white font-semibold">2</p>
            </div>
          </div> */}

          <div className="relative">
            <div className="flex justify-center">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : UserDp}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-md rounded-full object-cover "
                alt="userDp"
                onClick={login}
              />
            </div>
            {/* <div className="font-semibold opacity-50">
              {user ? user.displayName : ""}
            </div> */}

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-xl flex-col absolute top-11 right-0 "
              >
                {user && user.email === "raveensamudika@gmail.com" && (
                  <Link to={"/createitem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out
                     text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                {user && user.email === "raveensamudika@gmail.com" && (
                  <Link to={"/summaryview"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out
                     text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      Summary <AiOutlineEye />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out
                 text-textColor text-base"
                  onClick={logout}
                >
                  Log Out
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/**/}
      <div className="flex items-center justify-between md:hidden h-full w-full ">
        <div className="relative flex items-center justify-center">
          <MdLocationOn className="text-color text-2xl  cursor-pointer " />
          <div className="absolute -top-2.5 -right-1.5 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-center text-sm text-white font-semibold">2</p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={Logo}
            className="col-span-2 max-h-12 w-full object-cover "
            alt="logo"
          />
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : UserDp}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-md rounded-full object-cover"
            alt="userDp"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-xl flex-col absolute top-11 right-0 "
            >
              {user && user.email === "raveensamudika@gmail.com" && (
                <Link to={"/createitem"}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out
                   text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col px-4 py-2  gap-3 ml-auto ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out 
                  hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                {/* <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out 
                  hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out 
                  hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out 
                  hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li> */}
              </ul>

              <p
                className="m-2 p-2 rounded-lg shadow-md flex items-center gap-3 bg-gray-200 cursor-pointer hover:bg-gray-300 
              transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Log Out
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
