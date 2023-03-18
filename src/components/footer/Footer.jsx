import React from "react";
import logo from "../assets/images/logoA.png";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" h-32 rounded-lg  flex  items-center   border-2 border-green-300 drop-shadow-md">
      <div class="grid  grid-rows-3 grid-flow-col gap-4 items-center mx-8">
        <div class="row-span-3 ">
          <img src={logo} alt="logo" className="w-56 h-auto " />
        </div>
        <div class="col-span-1 row-span-3 text-sm  text-right">
          Explore the world with our curated travel guides, insider tips, and
          unbeatable deals. Plan your next adventure with us and make
          unforgettable memories. Book now and let us help you create your dream
          vacation.
          <br />
          <br />
          <div className="text-base">
            <div className="flex flex-auto items-center gap-3 justify-end">
              <FaFacebookF className=" cursor-pointer text-lg" />
              <BsGoogle className=" cursor-pointer text-lg" />
              <GrInstagram className=" cursor-pointer text-lg"/>
              © 2023 Copyright:
              Houseguider.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
