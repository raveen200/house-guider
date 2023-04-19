import React from "react";
import { UseStateValue } from "../context/StateProvider";
import {
  deleteItem,
  getAllItems,
  saveItem,
} from "../../utils/firebaseFunctions";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemsReadOnly from "./ItemsReadOnly";
import ItemsEdit from "./ItemsEdit";
import { actionTypes } from "../context/reducer";

const SummaryView = () => {
  const [{ items, users }, dispatch] = UseStateValue();
  const [data, setData] = useState([]);
  const [editContentId, setEditContentId] = useState(null);
  // const [newContent, setNewContent] = useState([]);
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

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditContentId(item.title);

    const formValues = {
      title: item.title,
      province: item.province,
      location: item.location,
      price: item.price,
    };
    setEditFormData(formValues);
  };
  const [editFormData, setEditFormData] = useState({
    title: "",
    province: "",
    location: "",
    price: "",
  });
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const fetchData = async () => {
    await getAllItems().then((data) => {
      dispatch({
        type: actionTypes.SET_ITEMS,
        items: data,
      });
    });
  };

  const handleEditFormSubmit = async (event) => {
    console.log(`handleEditFormSubmit editFormData`, editFormData);
    event.preventDefault();
    const editedItem = {
      title: editFormData.title,
      province: editFormData.province,
      location: editFormData.location,
      price: editFormData.price,
    };
    await saveItem(editedItem);

    await fetchData();

    setEditContentId(null);
  };

  const handleCancelClick = () => {
    setEditContentId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
          <Link to={"/bookingView"}>Resrvations</Link>
        </button>
      </div>

      <div className="flex px-1 py-8  gap-2 flex-wrap justify-center ">
        {/* Houses  */}
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-10/12">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <caption className="flex  justify-center  text-green-600 text-[1rem] lg:text-[2rem] bg-green-100 ">
              Houses
            </caption>
            <form>
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
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length ? (
                    data.map((item) => (
                      <>
                        {editContentId === item.title ? (
                          <ItemsEdit
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                            handleEditFormSubmit={handleEditFormSubmit}
                          />
                        ) : (
                          <ItemsReadOnly
                            item={item}
                            deteteDocument={deteteDocument}
                            handleEditClick={handleEditClick}
                          />
                        )}
                      </>
                    ))
                  ) : (
                    <div className="w-full  flex flex-col  items-center justify-center">
                      <h1 className="text-2xl text-green-600">No Data Found</h1>
                    </div>
                  )}
                </tbody>
              </table>
            </form>
          </div>
        </div>

        {/* User */}

        <div className="flex mt-8">
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
