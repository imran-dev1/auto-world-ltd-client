import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddItem = (data) => {
    const {
      item_name,
      item_details,
      thumb_url,
      price,
      quantity,
      supplier_name,
    } = data;
    fetch("http://localhost:4000/products", {
      method: "POST",
      body: JSON.stringify({
        name: item_name,
        description: item_details,
        supplier_name,
        thumbnail: thumb_url,
        price,
        quantity,
        sold: 0,
        user_email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        toast.success("Item Added");
        reset();
      });
  };

  return (
    <div className="pt-24 pb-24 px-3">
      <ToastContainer></ToastContainer>
      <div className="container mx-auto" style={{ maxWidth: "700px" }}>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-5 text-center">
          Add New Item
        </h2>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(handleAddItem)}>
            <div className="shadow-lg overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="item_name"
                      className="block font-medium text-gray-700"
                    >
                      Item name :
                    </label>
                    <input
                      {...register("item_name", {
                        required: "Item Name is required!",
                      })}
                      type="text"
                      name="item_name"
                      id="item_name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.item_name?.message && (
                      <p className="text-red-500 text-left mb-2">
                        {errors.item_name?.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="item_details"
                      className="block font-medium text-gray-700"
                    >
                      Item Details :
                    </label>
                    <textarea
                      {...register("item_details", {
                        required: "Item Details is required!",
                      })}
                      id="item_details"
                      name="item_details"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Write something..."
                    ></textarea>
                    {errors.item_details?.message && (
                      <p className="text-red-500 text-left mb-2">
                        {errors.item_details?.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="thumb_url"
                      className="block font-medium text-gray-700"
                    >
                      Item thumbnail url :
                    </label>
                    <input
                      {...register("thumb_url", {
                        required: "Please add image url!",
                      })}
                      type="text"
                      name="thumb_url"
                      id="thumb_url"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="https://example.com/item.jpg"
                    />
                    {errors.thumb_url?.message && (
                      <p className="text-red-500 text-left mb-2">
                        {errors.thumb_url?.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="supplier_name"
                      className="block font-medium text-gray-700"
                    >
                      Supplier Name :
                    </label>
                    <input
                      {...register("supplier_name", {
                        required: "Please add supplier name!",
                      })}
                      type="text"
                      name="supplier_name"
                      id="supplier_name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.supplier_name?.message && (
                      <p className="text-red-500 text-left mb-2">
                        {errors.supplier_name?.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="price"
                      className="block font-medium text-gray-700"
                    >
                      Price :
                    </label>
                    <input
                      {...register("price", {
                        required: "Price is required!",
                      })}
                      type="text"
                      name="price"
                      id="price"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.price?.message && (
                      <p className="text-red-500 text-left mb-2">
                        {errors.price?.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="quantity"
                      className="block font-medium text-gray-700"
                    >
                      Quantity :
                    </label>
                    <input
                      {...register("quantity", {
                        required: "Quantity is required!",
                      })}
                      type="text"
                      name="quantity"
                      id="quantity"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.quantity?.message && (
                      <p className="text-red-500 text-left mb-2">
                        {errors.quantity?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add <AiOutlinePlus className="text-xl"></AiOutlinePlus>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
