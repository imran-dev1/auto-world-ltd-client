import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddItem = () => {
  return (
    <div className="pt-24 pb-24 px-3">
      <div className="container mx-auto" style={{ maxWidth: "700px" }}>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-5 text-center">
          Add New Item
        </h2>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="shadow-lg overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      for="first-name"
                      className="block font-medium text-gray-700"
                    >
                      Item name :
                    </label>
                    <input
                      type="text"
                      name="item-name"
                      id="item-name"
                      autocomplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      for="last-name"
                      className="block font-medium text-gray-700"
                    >
                      Item Details :
                    </label>
                    <textarea
                      id="item-details"
                      name="item-details"
                      rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Write something..."
                    ></textarea>
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      for="email-address"
                      className="block font-medium text-gray-700"
                    >
                      Item thumbnail url :
                    </label>
                    <input
                      type="text"
                      name="thumb-url"
                      id="thumb-url"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="https://example.com/item.jpg"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      className="block font-medium text-gray-700"
                    >
                      Supplier Name :
                    </label>
                    <input
                      type="text"
                      name="supplier-name"
                      id="supplier-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="region"
                      className="block font-medium text-gray-700"
                    >
                      Price :
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="quantity"
                      className="block font-medium text-gray-700"
                    >
                      Quantity :
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
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
