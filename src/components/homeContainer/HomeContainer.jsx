import React from "react";
import GreenBG from "../assets/images/BG.png";
import Girl from "../assets/images/Girl.png";
import { Link } from "react-router-dom";
import { UseStateValue } from "../context/StateProvider";


const HomeContainer = () => {
  const [{ user }, dispatch] = UseStateValue();

 // console.log(user);
  return (
    <section
      className="grid grid-cols-1 gap-2 md:grid-cols-2 w-full  "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className="text-[2.0rem] lg:text-[4.0rem] font-bold tracking-wide text-headingColor ">
          One Tap to Find <br />
          <span className="text-green-600 text-[3rem] lg:text-[5rem]">
            Your Gust House
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Whether you're traveling for business or pleasure, Find Guesthouse has
          got you covered. Start planning your next trip today by visiting our
          website and finding the perfect guesthouse for your stay!
        </p>

        
          <p
            className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 
           rounded-xl hover:shadow-lg transition-all ease-in-out duration-100"
          >
            
            {user ? (
              <Link to={"/booknow"}> Book Now </Link>
            ) : (
              <Link to={"/login"}> Book Now </Link>
            )
              }

           {/* <Link to={"/booknow"}> Book Now </Link> */}
          </p>
        
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={GreenBG}
          alt="BG"
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
        />
        <div className="w-full h-full absolute scale-110 top-5 left-10 flex items-center justify-center lg:px-0  py-2 gap-4 flex-wrap">
          <img src={Girl} alt="Side pic" className="bg-cover " />
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
