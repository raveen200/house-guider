import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseStateValue } from "../context/StateProvider";
import { Placeholder } from "react-bootstrap";

const BookingView = () => {
  const [{ reservations }] = UseStateValue();
  // console.log(`reservations`, reservations);

  const reservationData = reservations;

  const [search, setSearch] = useState("");

  const searchHadler = (e) => {
    setSearch(e.target.value);
  };

  const searchFilter = reservationData.filter((reservation) => {
    return reservation.userAccountEmail
      .toLowerCase()
      .includes(search.toLowerCase());
  });
  // console.log(`searchFilter`, searchFilter);


  


  return (
    <div className=" h-screen">
      <div className="flex items-center justify-center m-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
          <Link to={"/summaryview"}>Users and Houses</Link>
        </button>
      </div>
      <div className="flex justify-end items-center">
        <input
          type="search"
          className="border-2 border-green-600 rounded-md p-2 m-2"
          placeholder="Search by User Email"
          onChange={searchHadler}
        />
       
      </div>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <caption className="flex  item-center justify-center  text-green-600 text-[1rem] lg:text-[2rem] bg-green-100 ">
            Reservations
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
                  Province
                </th>
                <th scope="col" className="px-6 py-3">
                  House
                </th>
                <th scope="col" className="px-6 py-3">
                  Number of Guests
                </th>
                <th scope="col" className="px-6 py-3">
                  Check In
                </th>
                <th scope="col" className="px-6 py-3">
                  Check Out
                </th>
                <th scope="col" className="px-6 py-3">
                  Requests
                </th>
              </tr>
            </thead>
            <tbody>
              {searchFilter && searchFilter.length > 0 ? (
                searchFilter.map((reservation) => (
                  <tr
                    key={reservation.id}
                    className="bg-green-600 border-b  border-green-400 hover:bg-green-500"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100"
                    >
                      {reservation?.firstName}
                    </th>
                    <td className="px-6 py-4">
                      {reservation?.userAccountEmail}
                    </td>
                    <td className="px-4 py-4 ">{reservation?.province}</td>
                    <td className="px-4 py-4 ">{reservation?.hotel}</td>
                    <td className="px-4 py-4 text-center">
                      {reservation?.numberOfGuests}
                    </td>
                    <td className="px-4 py-4 ">{reservation?.checkInDate}</td>
                    <td className="px-4 py-4 ">{reservation?.checkOutDate}</td>
                    <td className="px-4 py-4 ">{reservation?.requests}</td>
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
  );
};

export default BookingView;
