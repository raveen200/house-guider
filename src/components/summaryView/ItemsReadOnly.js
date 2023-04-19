import React from 'react'

const ItemsReadOnly = ( {item,deteteDocument,handleEditClick}) => {
  return (
    
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
          <div className="flex items-center gap-2">
            <div
              className="font-medium text-white  hover:text-blue-500 cursor-pointer"
                onClick={(event) => handleEditClick(event,item)}
            >
              Update
            </div>
    
            <div
              className="font-medium text-white  hover:text-red-500 cursor-pointer"
              onClick={() => deteteDocument(item.id)}
            >
              Delete
            </div>
          </div>
        </td>
      </tr>
      )
    }
    

export default ItemsReadOnly