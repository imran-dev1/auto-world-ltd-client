import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const InventoryDetails = () => {
  const [user] = useAuthState(auth);
  const [inventory, setInventory] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Fetch Product Details by Id
  const { _id } = useParams();
  useEffect(() => {
    fetch(`https://auto-world026.herokuapp.com/product/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setInventory(data);
      });
  }, [inventory]);

  //Handle Delivered
  const handleDelivered = () => {
    const newQuantity = parseInt(inventory.quantity) - 1;
    const updatedSold = parseInt(inventory.sold) + 1;
    if (user) {
      fetch(`https://auto-world026.herokuapp.com/product/${_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          quantity: `${newQuantity}`,
          sold: `${updatedSold}`,
        }),
        headers: {
          authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "success") {
            toast.success("Item delivered!");
          } else {
            toast.error("Unauthorize access");
          }
        });
    } else {
      toast.warning("Please login to make changes!");
    }
    reset();
  };

  //Add quantity handler
  const handleAddQuantity = (data) => {
    setFetching(true);
    const { quantity } = data;
    const newQuantity = parseInt(inventory.quantity) + parseInt(quantity);
    if (user) {
      fetch(`https://auto-world026.herokuapp.com/product/${_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          quantity: `${newQuantity}`,
        }),
        headers: {
          authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "success") {
            toast.success("Quantity updated!");
            setFetching(false);
          } else {
            toast.error("Unauthorize access");
            setFetching(false);
          }
        });
    } else {
      toast.warning("Please login to add quantity!");
    }
    reset();
  };

  return (
    <div className="pt-24 pb-24 px-3">
      <ToastContainer autoClose={2000} />
      {!loading ? (
        <Loading></Loading>
      ) : (
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
                <p className="text-xl">Sold Items: {inventory.sold}</p>
                <button
                  onClick={handleDelivered}
                  className="bg-indigo-200 hover:bg-indigo-300 py-2 px-5 rounded-md mt-2 flex items-center gap-1"
                >
                  Delivered
                </button>
              </div>
              <div className="bg-[#eef3fa] p-5 rounded-lg my-5">
                <p className="mb-5 text-xl">
                  Stock quantity: {inventory.quantity}
                </p>
                <p>Restock Items:</p>
                <form
                  className="flex mt-1"
                  onSubmit={handleSubmit(handleAddQuantity)}
                >
                  <input
                    {...register("quantity", {
                      required: "Please add some quantity!",
                    })}
                    className=" max-w-[150px] min-w-[80px]"
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="Quantity"
                  />

                  <input
                    className="bg-slate-700 hover:bg-slate-800 cursor-pointer text-white px-3"
                    type="submit"
                    value={fetching ? "Adding..." : "Add quantity"}
                  />
                </form>
                {errors.quantity?.message && (
                  <p className="text-red-500 text-left mb-2">
                    {errors.quantity?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryDetails;
