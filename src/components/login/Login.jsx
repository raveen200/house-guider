import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Signup from "../signUp/Signup";

const Login = () => {
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
              Sign in to your account
            </div>
            <form className="bg-gray-100 rounded-lg px-5 ">
              {/* Email */}
              <div class="relative mb-6 " data-te-input-wrapper-init>
                <input
                  type="text"
                  class="text-base font-semibold   peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
                  placeholder="Email address"
                />
              </div>

              {/* Password */}

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  class="text-base font-semibold   peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                class="inline-block w-full rounded bg-green-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal
                 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
                 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 
                 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700
                  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>

              <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t
               before:border-green-300 after:mt-0.5 after:flex-1 after:border-t after:border-green-300"
              >
                <p class="mx-4 mb-0 text-center font-semibold dark:text-black">
                  OR
                </p>
              </div>
              <div
                class="mb-3 flex w-full gap-3 items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-semibold uppercase leading-normal
                         text-green-700 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out
                         hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600
                          focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                         focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <FcGoogle className="text-2xl" />
                Continue with Google
              </div>

              <div class="flex text-blue-900 text-base font-semibold  items-center cursor-pointer">
                 <Link to={"/signup"}>
                Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
