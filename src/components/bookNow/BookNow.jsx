import React, { useEffect } from "react";
import { provinces } from "../../utils/data";
import { UseStateValue } from "../context/StateProvider";
import { useState } from "react";
import { saveReservation } from "../../utils/firebaseFunctions";
import { motion } from "framer-motion";
import BookNowVideo from "..//assets//images//BookNow.mp4";

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
  const [msg, setMsg] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");

  //console.log(user);

  //console.log(items);

  const handleProvinceChange = (e) => {
    setFilter(e.target.value);
  };

  //console.log(filter);

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
    setFields(true);
    setMsg("Reservation saved successfully");
    setAlertStatus("success");
    setTimeout(() => {
      setFields(false);
    }, 4000);
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-4">
        <div className="g-6 flex h-full flex-wrap items-center  justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12">
            <video
              src={BookNowVideo}
          
              autoplay="true"
              loop="true"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-6/12">
            <div>
              {fields && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                    alertStatus === "danger"
                      ? "bg-red-400 text-red-800"
                      : "bg-emerald-400 text-emerald-800"
                  }`}
                >
                  {msg}
                </motion.p>
              )}
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
                  <div className=" flex items-center text-base gap-4">
                    <p>Province</p>
                    <select value={filter} onChange={handleProvinceChange}>
                      {provinces.map((province) => (
                        <option key={province.id} value={province.urlParamName}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center text-base gap-4">
                    <p>Gust House</p>
                    <select
                      value={hotel}
                      onChange={(e) => setHotel(e.target.value)}
                    >
                      {items &&
                        items
                          .filter((item) => item.province === filter)
                          .map((item) => (
                            <option key={item.id} value={item.value}>
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
                  <div className=" items-center text-base h-40 w-3/4 bg-green-100 rounded-lg">
                    <textarea
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
