import React from "react";
import "./Item.css";

const Item = (props) => {
  const { name, price, thumbnail, quantity, supplier_name } = props.item;
  return (
    <div className="item shadow-xl rounded-lg">
      <div className="h-48 bg-cover bg-no-repeat bg-center rounded-t-lg bg-black/30 bg-blend-overlay overflow-hidden relative">
        <img
          src={thumbnail}
          alt=""
          className="item-thumbnail w-full h-full object-cover rounded-t-lg transition-all duration-500"
        />
        <div className="overlay h-full w-full bg-[#222732]/40 absolute top-0 left-0 opacity-30 transition-all duration-500"></div>
      </div>
      <div className="p-4 bg-[#222732] text-white">
        <h3 className="text-xl">{name}</h3>
        <h2 className="text-3xl py-2">${price}</h2>
      </div>
      <div className="flex items-center justify-between bg-[#2c3443] text-white px-4 py-2 rounded-b-lg">
        <h4>Supplier: {supplier_name}</h4>
        <h4>Available: {quantity}</h4>
      </div>
    </div>
  );
};

export default Item;
