import React from "react";
import { UseStateValue } from "../context/StateProvider";
import { doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

const SummaryView = () => {
  const [{ items, users }] = UseStateValue();
  const data = items;
  const userdata = users;

  const deleteHandler = (id) => {
  doc(firestore, "items", id).deleteDoc().await();
   
    
  };

  // console.log(userdata);

  return (
    <section className="h-screen">
      <div className="flex  justify-between px-1 py-24 gap-2 flex-wrap ">
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
              {data && data.length > 0 ? (
                data.map((item) => (
                  <tbody>
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
                        <div className="flex  items-center gap-3">
                          <div className="font-medium text-white  hover:text-yellow-300 cursor-pointer">
                            Edit
                          </div>

                          <div
                            className="font-medium text-white  hover:text-red-500 cursor-pointer"
                            onClick={() => deleteHandler(item.id)}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="w-full  flex flex-col  items-center justify-center">
                  <h1 className="text-2xl text-green-600">No Data Found</h1>
                </div>
              )}
            </table>
          </div>
        </div>

        {/* User */}

        <div>
          <caption className="flex  item-center justify-center  text-green-600 text-[1rem] lg:text-[2rem] bg-green-100 ">
            User
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
                <th scope="col" className="px-6 py-3">
                  profile Create Date
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            {userdata && userdata.length > 0 ? (
              userdata.map((user) => (
                <tbody>
                  <tr className="bg-green-600 border-b border-green-400 hover:bg-green-500">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100"
                    >
                      {user?.name}
                    </th>
                    <td className="px-6 py-4">{user?.email}</td>
                    <td className="px-6 py-4">
                      <img
                        src={user?.photo}
                        alt="Dp"
                        className="w-4 h-4 rounded-md "
                      />
                    </td>
                    <td className="px-6 py-4">{user?.uid}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-white hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div className="w-full  flex flex-col  items-center justify-center">
                <h1 className="text-2xl text-green-600">No Data Found</h1>
              </div>
            )}
          </table>
        </div>
      </div>
    </section>
  );
};

export default SummaryView;
