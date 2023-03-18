import React, { useEffect, useState } from "react";
import { Footer, HomeContainer, MenuContainer, RowContainer } from "..";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UseStateValue } from "../context/StateProvider";

export const MainContainer = () => {
  const [{ items }, dispatch] = UseStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const [filter, setFilter] = useState("Central Province");
  

  useEffect(() => {},[scrollValue]);
  return (
    <div className="w-full h-auto flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg
           before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-600
            transition-all ease-in-out duration-100"
          >
            Our Guest Houses and Locations
          </p>

          <div className="hidden md:flex gap-3 items-center z-50">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer  hover:shadow-lg
              flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer  hover:shadow-lg
               flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={items}
        />
      </section>

      <section className="w-full my-6">
        <MenuContainer />
        <Footer />
      </section>
    </div>
  );
};
export default MainContainer;
