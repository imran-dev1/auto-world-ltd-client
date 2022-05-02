import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const [inventory, setInventory] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data.json")
      .then((res) => res.json())
      .then((data) => {
        setInventory(data.find((item) => item.id === parseInt(id)));
      });
  }, []);
  console.log(inventory);
  return (
    <div className="pt-24 pb-24 px-3">
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="md:flex justify-between gap-5">
          <div className="md:w-4/6">
            <div className=" h-60 md:h-96 bg-cover bg-no-repeat bg-center rounded-lg bg-black/30 bg-blend-overlay overflow-hidden">
              <img
                src={inventory.thumbnail}
                alt=""
                className="item-thumbnail w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#eef3fa] p-5 rounded-lg my-5">
              <h2 className="text-3xl">{inventory.name}</h2>
              <h4 className="bg-indigo-200 inline-block px-2 py-1 rounded-md mt-2">
                Supplier: {inventory.supplier_name}
              </h4>
            </div>
            <div className="bg-[#eef3fa] p-5 rounded-lg my-5">
              <h2 className="text-xl">Details</h2>
              <p className="text-slate-500">{inventory.description}</p>
            </div>
          </div>
          <div className="md:w-2/6">
            <div className="bg-[#eef3fa] p-5 rounded-lg">
              <h2 className="text-3xl">Price: ${inventory.price}</h2>
            </div>
            <div className="bg-[#eef3fa] p-5 rounded-lg my-5">
              <p className="text-xl">Sold Items: 50</p>
              <button className="bg-indigo-200 hover:bg-indigo-300 py-2 px-5 rounded-md mt-2 flex items-center gap-1">
                Delivered{" "}
              </button>
            </div>
            <div className="bg-[#eef3fa] p-5 rounded-lg my-5">
              <p className="mb-5 text-xl">
                Stock quantity: {inventory.quantity}
              </p>
              <p>Restock Items:</p>
              <form className="flex mt-1">
                <input
                  className=" max-w-[150px] min-w-[80px]"
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="Quantity"
                />
                <input
                  className="bg-slate-700 hover:bg-slate-800 cursor-pointer text-white px-3"
                  type="submit"
                  value="Add quantity"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
