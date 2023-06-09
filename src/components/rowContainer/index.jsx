import React, { useEffect, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";            
import NotFound from "../assets/images/NotFound.png"

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef(null);
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12  scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center "
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 min-w-[300px]  md:w-340 md:min-w[340px] h-auto my-12 bg-cardOverlay rounded-lg p-2  backdrop-blur-lg hover:drop-shadow-xl flex flex-col
             items-center justify-between"
          >
            <div className="w-full  flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <IoLocationOutline className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col  items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">{item?.location}</p>
              <div className="flex item-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span>
                {item?.price}
              </p>
              </div>
            </div>
          </div>
        ))
        ):(
          <div className="w-full  flex flex-col  items-center justify-center">
            <img src={NotFound} alt="" className="h-340" />
            <p className= "text-xl text-headingColor font-semibold my-2">
              No Results Found
            </p>
          </div>


        )}

    </div>
  );
};

export default RowContainer;
