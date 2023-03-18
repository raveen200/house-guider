import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Nav, MainContainer, CreateContainer, Login, Footer } from "./components";
import { getAllItems } from "./utils/firebaseFunctions";
import { actionTypes } from "./components/context/reducer";
import { UseStateValue } from "./components/context/StateProvider";

const App = () => {
  const [{items}, dispatch] = UseStateValue();

  const fetchData = async () => {
    await getAllItems().then((data) => {
      dispatch({
        type: actionTypes.SET_ITEMS,
        items: data,
      });
    });
  };

      useEffect(() => {
          fetchData();  
        }, []);
  

  return (
    <AnimatePresence  >
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Nav />
        <main className="mt-16 md:mt-20 px-4  md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createitem" element={<CreateContainer />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );


};


export default App;
