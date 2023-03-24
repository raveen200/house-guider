import React from "react";
import { UseStateValue } from "../context/StateProvider";

const SummaryView = () => {
  const [{ items }, { Users }, dispatch] = UseStateValue();
  const data = items;
  const user = Users;

  console.log("SummaryView", user);

  // console.log( 'SummaryView', data);
  return (
    <section className="h-screen">
      <div className="flex items-center justify-between px-6 py-24 gap-6 flex-wrap ">
        {/* Houses  */}
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <caption class="flex items-center justify-center  text-green-600 text-[1rem] lg:text-[2rem] bg-green-100 ">
              Houses
            </caption>
            <table class="w-full text-sm text-left text-green-100 dark:text-green-100">
              <thead class="text-xs text-green uppercase bg-green-600 border-b border-green-400 dark:text-green">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    House Title
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Province
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              {data && data.length > 0 ? (
                data.map((item) => (
                  <tbody >
                    <tr key={item.id} class="bg-green-600 border-b border-green-400 hover:bg-green-500">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100"
                      >
                        {item?.title}
                      </th>
                      <td class="px-6 py-4">{item?.province}</td>
                      <td class="px-6 py-4">{item?.location}</td>
                      <td class="px-6 py-4">${item?.price}</td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-white hover:underline"
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

        {/* User */}

        <div>
          <caption class="flex items-center justify-center  text-green-600 text-[1rem] lg:text-[2rem] bg-green-100 ">
            User
          </caption>
          <table class="w-full text-sm text-left text-green-100 dark:text-green-100">
            <thead class="text-xs text-green uppercase bg-green-600 border-b border-green-400 dark:text-green">
              <tr>
                <th scope="col" class="px-6 py-3">
                  User Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Profile Picture
                </th>
                <th scope="col" class="px-6 py-3">
                  profile Create Date
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-green-600 border-b border-green-400 hover:bg-green-500">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100"
                >
                  Kasun
                </th>
                <td class="px-6 py-4">kasun@gmail.com</td>
                <td class="px-6 py-4">
                  <img src="jbj" alt="Dp" className="w-4 h-4 rounded-md " />
                </td>
                <td class="px-6 py-4">12/12/23</td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-white hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SummaryView;
