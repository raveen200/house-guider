import React from "react";
import { UseStateValue } from "../context/StateProvider";
import { deleteItem } from "../../utils/firebaseFunctions";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SummaryView = () => {
  const [{ items, users }] = UseStateValue();
  const [data, setData] = useState([]);
  ///const data = items;
  useEffect(() => {
    setData(items);
  }, [items]);

  const userdata = users;
  console.log(`data`, data);

  const deteteDocument = async (id) => {
    console.log(`id`, id);
    await deleteItem(id);
    console.log(`data`, data.length);

    const aData = data.filter((item) => item.id !== id);
    setData(aData);
    console.log(`data`, data.length);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
         <Link to={"/bookingView"}>
          Resrvations
          </Link>
        </button>
      </div>

      <div className="flex  justify-between px-1 py-8 gap-2 flex-wrap ">
        {/* Houses  */}
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <caption className="flex  justify-center  text-green-600 text-[1rem] lg:text-[2rem] bg-green-100 ">
              Houses
            </caption>
            <table className="w-full text-sm text-left text-green-100 dark:text-green-100">
              <thead className="text-xs text-green uppercase bg-green-600 border-b border-green-400 dark:text-green">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    House Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Province
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {data && data.length ? (
                  data.map((item) => (
                    <tr
                      key={item.id}
                      className="bg-green-600 border-b border-green-400 hover:bg-green-500"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100"
                      >
                        {item?.title}
                      </th>
                      <td className="px-6 py-4">{item?.province}</td>
                      <td className="px-6 py-4">{item?.location}</td>
                      <td className="px-6 py-4">${item?.price}</td>
                      <td className="px-6 py-4">
                        <div
                          className="font-medium text-white  hover:text-red-500 cursor-pointer"
                          onClick={() => deteteDocument(item.id)}
                        >
                          Delete
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="w-full  flex flex-col  items-center justify-center">
                    <h1 className="text-2xl text-green-600">No Data Found</h1>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* User */}

        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <caption className="flex  item-center justify-center  text-green-600 text-[1rem] lg:text-[2rem] bg-green-100 ">
              Users
            </caption>
            <table className="w-full text-sm text-left text-green-100 dark:text-green-100">
              <thead className="text-xs text-green uppercase bg-green-600 border-b border-green-400 dark:text-green">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Profile Picture
                  </th>
                </tr>
              </thead>
              <tbody>
                {userdata && userdata.length > 0 ? (
                  userdata.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-green-600 border-b border-green-400 hover:bg-green-500"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100"
                      >
                        {user?.name}
                      </th>
                      <td className="px-6 py-4">{user?.email}</td>
                      <td className="px-4 py-4 ">
                        <img
                          src={user?.photo}
                          alt="Dp"
                          className="w-6 h-6 rounded-md "
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="w-full  flex flex-col  items-center justify-center">
                    <h1 className="text-2xl text-green-600">No Data Found</h1>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
