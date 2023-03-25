import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Nav, MainContainer, CreateContainer, Login, Footer, SignUp, SummaryView } from "./components";
import { getAllItems, getAllUsers } from "./utils/firebaseFunctions";
import { actionTypes } from "./components/context/reducer";
import { UseStateValue } from "./components/context/StateProvider";


const App = () => {

  const [, dispatch] = UseStateValue();
 
  

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

const fetchUser = async () => {
  await getAllUsers().then((data) => {
    dispatch({
      type: actionTypes.SET_USERS,
      users: data,
    });
  });
};

    useEffect(() => {
        fetchUser();
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
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/summaryview" element={<SummaryView/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );


};


export default App;
