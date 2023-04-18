import React, { useEffect } from "react";
import { provinces } from "../../utils/data";
import { UseStateValue } from "../context/StateProvider";
import { useState } from "react";

const BookNow = () => {
  const [{ items }, dispatch] = UseStateValue();
  const [filter, setFilter] = useState("Central Province");

 console.log(items);

  const handleProvinceChange = (e) => {
    setFilter(e.target.value);
  };

  console.log(filter);
  

  


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
              type="text"
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="First Name"
            />
          </div>
          <div className="bg-gray-100 rounded-lg ">
            <input
              required
              name="LastName"
              type="text"
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div>
            <select 
            value={filter}
            onChange={handleProvinceChange}
           
            
            >
              {provinces.map((province) => (
                <option key={province.id} value={province.urlParamName}>
                  {province.name}
                    
                </option>
              
              ))}
            </select>
          </div>
          <div>
            
            <select>
              {items &&
                items
                  .filter((item) => item.province === filter)
                  .map((item) => (
                    <option key={item.id} value={item.id}>
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
                type="number"
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
              name="NumberOfGuests"
              type="date"
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="Number Of Guests "
            />
          </div>
          <p className="text-base">Check-out</p>
          <div className="bg-gray-100 rounded-lg ">
            <input
              required
              name="NumberOfGuests"
              type="date"
              className="text-base font-semibold text-green-800 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="Number Of Guests "
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" items-center text-base h-40 w-1/3 bg-green-100">
            <input
              required
              name="NumberOfGuests"
              type="textarea"
              className="text-base font-semibold text-green-800 peer block h-40 w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15]"
              placeholder="Special requests"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookNow;
