import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { UseStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";


export const firebaseAuth = getAuth();
const provider = new GoogleAuthProvider();
//  const [{ user }, dispatch] = UseStateValue();


const login = async () => {
  const {
    user: { providerData },
  } = await signInWithPopup(firebaseAuth, provider);
  // {
  //   type: actionTypes.SET_USER,
  //   user: providerData[0],
  // };
  localStorage.setItem("user", JSON.stringify(providerData[0]));
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  createUserWithEmailAndPassword(firebaseAuth, email, password);
};

const defaultFormFeild = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formFeild, setFormFeild] = useState(defaultFormFeild);
  const { userName, email, password, confirmPassword } = formFeild;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log("user Creation an Error", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFeild({ ...formFeild, [name]: value });
  };

  console.log(user);

  return (
    <section className="h-screen">
      <div class="container h-full px-6 py-24">
        <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/houseguider17.appspot.com/o/web_img%2Flockgirl.png?alt=media&token=d8a39b2b-58a1-49cc-aa7d-312d6bf1a31d"
              alt=" login"
              className="w-full"
            />
          </div>

          <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div class="flex flex-col text-lg gap-2 mb-4 text-green-900 font-bold items-center justify-center w-full">
              Sign Up with Email and Password
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 rounded-lg px-5 "
            >
              {/* Display Name */}

              <div class="relative mb-6 " data-te-input-wrapper-init>
                <input
                  onChange={handleChange}
                  required
                  name="userName"
                  value={userName}
                  type="text"
                  class="text-base font-semibold   peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
                  id="exampleFormControlInput3"
                  placeholder="User Name"
                />
              </div>

              {/* Email */}
              <div class="relative mb-6 " data-te-input-wrapper-init>
                <input
                  onChange={handleChange}
                  required
                  name="email"
                  value={email}
                  type="email"
                  class="text-base font-semibold   peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                />
              </div>

              {/* Password */}

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  onChange={handleChange}
                  required
                  name="password"
                  value={password}
                  type="password"
                  class="text-base font-semibold   peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                />
              </div>

              {/* Confirm Password */}

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  onChange={handleChange}
                  required
                  name="confirmPassword"
                  value={confirmPassword}
                  type="password"
                  class="text-base font-semibold   peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
                  id="exampleFormControlInput33"
                  placeholder="Confirm Password"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                type="submit"
                class="inline-block w-full rounded bg-green-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal
               text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
               hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 
               focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700
                active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign Up
              </motion.button>

              <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t
             before:border-green-300 after:mt-0.5 after:flex-1 after:border-t after:border-green-300"
              >
                <p class="mx-4 mb-0 text-center font-semibold dark:text-black">
                  OR
                </p>
              </div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                class="mb-3 flex w-full gap-3 items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-semibold uppercase leading-normal
                       text-green-700 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out
                       hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600
                        focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                       focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                onClick={login}
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <FcGoogle className="text-2xl" />
                Continue with Google
              </motion.div>

              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
