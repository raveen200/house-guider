import React from "react";
import { provinces } from "../../utils/data";

const ItemsEdit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) => {
  return (
    <tr
      key={editFormData.id}
      className="bg-green-600 border-b border-green-400 hover:bg-green-500"
    >
      <th scope="row">
        <input
          type="text"
          required="required"
          placeholder="Enter House Title"
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
          className="placeholder:italic bg-green-600 px-6 py-4"
        />
      </th>
      <td className="px-6 py-4">
        <select
          className="placeholder:italic bg-green-600"
          name="province"
          value={editFormData.province}
          onChange={handleEditFormChange}
        >
          {provinces.map((province) => (
            <option key={province.id} value={province.urlParamName}>
              {province.name}
            </option>
          ))}
        </select>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          required="required"
          placeholder="Enter Location"
          name="location"
          value={editFormData.location}
          onChange={handleEditFormChange}
          className="placeholder:italic bg-green-600"
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="currency"
          required="required"
          placeholder="Enter Price"
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
          className="placeholder:italic bg-green-600"
        />
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div
            onClick={handleEditFormSubmit}
            className="font-medium text-white  hover:text-blue-500 cursor-pointer"
          >
            Save
          </div>
          <div
            onClick={handleCancelClick}
            className="font-medium text-white  hover:text-red-500 cursor-pointer"
          >
            Cancel
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ItemsEdit;
