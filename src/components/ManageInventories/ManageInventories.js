import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { itemsContextApi } from "../../App";

const ManageInventories = () => {
  const items = useContext(itemsContextApi);
  return (
    <div className="py-16 px-3">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center">
            Manage Inventories
          </h2>
          <div className="flex items-center gap-1 justify-end">
            <button className="flex items-center gap-1 bg-white hover:shadow-xl hover:bg-[#394150] hover:text-white py-2 px-3 rounded-lg shadow-md">
              Add New Item <AiOutlinePlus className="text-xl"></AiOutlinePlus>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
            <table className="w-full text-left text-gray-600">
              <thead className="text-sm text-white uppercase bg-[#394150]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Item Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Supplier
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    className="bg-white hover:bg-[#f2f8fe] border-b"
                    key={item.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <img
                        src={item.thumbnail}
                        alt=""
                        className=" w-20 rounded-lg"
                      />
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.supplier_name}</td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-black hover:scale-110 bg-[#efefef] hover:bg-[#cedefd] p-2 rounded-full">
                        <AiOutlineDelete className="text-2xl"></AiOutlineDelete>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"></div>
    </div>
  );
};

export default ManageInventories;
