import React, { useContext, useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { itemsContextApi } from "../../../App";
import Loading from "../../Loading/Loading";
import Item from "./Item/Item";

const ItemsSection = () => {
  // const [
  //   items,
  //   handleUpdate,
  //   handleDelete,
  //   deleteId,
  //   deletePopup,
  //   setDeletePopup,
  //   popupHandler,
  //   pageCount,
  //   setPageCount,
  //   selectedPage,
  //   setSelectedPage,
  //   productPerPage,
  //   setProductPerPage,
  //   itemCount,
  //   loading,
  // ] = useContext(itemsContextApi);
  const [inventories, setInventories] = useState([]);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    fetch("https://auto-world026.herokuapp.com/homeInventories")
      .then((res) => res.json())
      .then((data) => {
        setFetching(true);
        setInventories(data);
      });
  }, []);

  return (
    <div className="pt-24 pb-52 px-3">
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
          <span className="text-2xl md:text-4xl font-extrabold">
            Most Demanded
          </span>
          <Link to="/manage-inventories">
            <div className="flex items-center gap-1 justify-end">
              <button className="flex items-center gap-1 bg-white hover:shadow-xl hover:bg-[#394150] hover:text-white py-2 px-3 rounded-lg shadow-md">
                Manage Inventories{" "}
                <HiOutlineArrowNarrowRight className="text-xl"></HiOutlineArrowNarrowRight>
              </button>
            </div>
          </Link>
        </div>
        {!fetching ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {inventories.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsSection;
