import React, { useContext, useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { itemsContextApi } from "../../App";
import Loading from "../Loading/Loading";
import DeleteConfirmation from "./DeleteConfirmation/DeleteConfirmation";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [
    items,
    handleUpdate,
    handleDelete,
    deleteId,
    deletePopup,
    setDeletePopup,
    popupHandler,
    pageCount,
    setPageCount,
    selectedPage,
    setSelectedPage,
    productPerPage,
    setProductPerPage,
    itemCount,
    loading,
  ] = useContext(itemsContextApi);

  return (
    <div className="py-16 px-3">
      <ToastContainer autoClose={2000} />
      {!loading && <Loading></Loading>}
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center">
            Manage Inventories
          </h2>
        </div>
        <p className=" order-3 md:-order-none text-gray-600 text-lg ">
          {itemCount} items
        </p>
        <div className="flex items-end justify-between mb-5">
          <div>
            <label htmlFor="products-per-page">Items per page</label>
            <select
              id="products-per-page"
              className="py-1 ml-2 focus:ring-0 border-gray-200 rounded-lg"
              onChange={(e) => setProductPerPage(e.target.value)}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <Link to="/add-item">
              <button className="flex items-center gap-1 bg-white hover:shadow-xl hover:bg-[#394150] hover:text-white py-2 px-3 rounded-lg shadow-md">
                Add New Item <AiOutlinePlus className="text-xl"></AiOutlinePlus>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
            <table className="w-full text-left text-gray-600">
              <thead className="text-sm text-white uppercase bg-[#394150]">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3 min-w-[100px]">
                    Image
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3 min-w-[250px]">
                    Item Name
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3 min-w-[150px]">
                    Supplier
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3 min-w-[100px]">
                    Price
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3 min-w-[100px]">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3 min-w-[150px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    className="bg-white hover:bg-[#f2f8fe] border-b"
                    key={item._id}
                  >
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <img
                        src={item.thumbnail}
                        alt=""
                        className=" w-20 rounded-lg"
                      />
                    </th>
                    <td className="px-4 md:px-6 py-4">{item.name}</td>
                    <td className="px-4 md:px-6 py-4">{item.supplier_name}</td>
                    <td className="px-4 md:px-6 py-4">${item.price}</td>
                    <td className="px-4 md:px-6 py-4">{item.quantity}</td>
                    <td className="px-4 md:px-6 py-4 text-center flex items-center gap-2">
                      <button
                        onClick={() => {
                          handleUpdate(item._id);
                        }}
                        className="text-black bg-[#efefef] hover:bg-slate-700 hover:text-white p-2 rounded-full flex items-center gap-1 text-sm"
                        title="Update Item"
                      >
                        <FiEdit3 className="text-2xl"></FiEdit3>
                      </button>
                      <button
                        onClick={() => popupHandler(item._id)}
                        className="text-black bg-red-200 hover:bg-red-300 p-2 rounded-full flex items-center gap-1 text-sm"
                        title="Delete Item"
                      >
                        <AiOutlineDelete className="text-2xl"></AiOutlineDelete>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {deletePopup ? <DeleteConfirmation></DeleteConfirmation> : ""}
          </div>{" "}
          {itemCount > 10 && (
            <nav
              className="gap-2 flex justify-end mt-5 "
              aria-label="Pagination"
            >
              {[...Array(pageCount).keys()].map((number) => (
                <button
                  onClick={() => setSelectedPage(number)}
                  key={number}
                  aria-current="page"
                  className={`bg-white border-gray-300 text-gray-500 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg ${
                    selectedPage === number && "selected"
                  }`}
                >
                  {number + 1}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
