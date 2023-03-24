import React, { useEffect, useState } from "react";
import { BsHouseAddFill } from "react-icons/bs";
import { provinces } from "../../utils/data";
import { motion } from "framer-motion";
import RowContainer from "../rowContainer/RowContainer";
import { UseStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("Central Province");
  const [{ items }, dispatch] = UseStateValue();
 

  return (
    <section className="w-full my-6 id='menu">
      <div className=" w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative before:absolute 
          before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr
         from-green-400 to-green-600 transition-all ease-in-out duration-100"
        >
          Provinces
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {provinces &&
            provinces.map((province) => (
              <motion.div
                whileTap={{ scale: 0.8 }}
                key={province.id}
                className={`group ${
                  filter === province.urlParamName ? "bg-cartNumBg" : "bg-card"
                } w-32 min-w-[94px] h-32 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick = {() => setFilter(province.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === province.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <BsHouseAddFill
                    className={`${
                      filter === province.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === province.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white text-center`}
                >
                  {province.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer flag={true} data={items?.filter(n=>n.province === filter)} />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
