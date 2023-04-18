import React, { useEffect } from "react";
import { provinces } from "../../utils/data";
import { UseStateValue } from "../context/StateProvider";
import { useState } from "react";
import { saveReservation } from "../../utils/firebaseFunctions";
import { motion } from "framer-motion";

const BookNow = (props) => {
  const [{ items, user }, dispatch] = UseStateValue();
  const [filter, setFilter] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [hotel, setHotel] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  //console.log(user);

  //console.log(items);

  const handleProvinceChange = (e) => {
    setFilter(e.target.value);
  };

  console.log(filter);

  const saveDetails = () => {
    const resvervationDetails = {
      id: `${Date.now()}`,
      firstName: firstName,
      lastName: lastName,
      numberOfGuests: numberOfGuests,
      hotel: hotel,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      province: filter,
      requests: specialRequests,
      userAccountEmail: user.email,
      userAccountName: user.displayName,
    };
    console.log(resvervationDetails);

    saveReservation(resvervationDetails);
  };

  return (
    <div>
      <div className="flex flex-col text-lg gap-2 mb-4 text-green-900 font-bold items-center justify-center  m-4">
        Reservation
      </div>

      <form className=" rounded-lg px-5 ">
        <div
          className="relative mb-6 flex justify-center gap-4"
          data-te-input-wrapper-init
        >
          <div className=" bg-gray-100 rounded-lg ">
            <input
              required
              name="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="First Name"
            />
          </div>
          <div className="bg-gray-100 rounded-lg ">
            <input
              required
              name="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div>
            <select value={filter} onChange={handleProvinceChange}>
              {provinces.map((province) => (
                <option key={province.id} value={province.urlParamName}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select value={hotel} onChange={(e) => setHotel(e.target.value)}>
              {items &&
                items
                  .filter((item) => item.province === filter)
                  .map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center m-4">
          <div>
            <div className="bg-gray-100 rounded-lg ">
              <input
                required
                name="NumberOfGuests"
                value={numberOfGuests}
                type="number"
                onChange={(e) => setNumberOfGuests(e.target.value)}
                className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
                placeholder="Number Of Guests "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center m-4 gap-4 items-center">
          <p className="text-base"> Check-in</p>
          <div className="bg-gray-100 rounded-lg ">
            <input
              required
              name="chaekIn"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              type="date"
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="chack-in"
            />
          </div>
          <p className="text-base">Check-out</p>
          <div className="bg-gray-100 rounded-lg ">
            <input
              required
              name="checkOut"
              value={checkOutDate}
              type="date"
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="chack-out"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" items-center text-base h-40 w-1/3 bg-green-100">
            <input
              required
              name="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              type="textarea"
              className="text-base font-semibold text-green-800 peer block h-40 w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="Special requests"
            />
          </div>
        </div>
        <div className="flex justify-center m-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}     
            type="button"
            className=" border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Reserve
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default BookNow;
