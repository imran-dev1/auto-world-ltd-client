import React from "react";
import "./Item.css";

const Item = (props) => {
  const { name, price, thumbnail, quantity, supplier_name } = props.item;
  return (
    <div className="item shadow-xl rounded-lg">
      <div className=" h-40 bg-cover bg-no-repeat bg-center rounded-t-lg bg-black/30 bg-blend-overlay overflow-hidden relative">
        <img
          src={thumbnail}
          alt=""
          className="item-thumbnail w-full h-full object-cover rounded-t-lg transition-all duration-500"
        />
        <div className="overlay h-full w-full bg-gradient-to-t from-black/60 absolute top-0 left-0 opacity-30 transition-all duration-500"></div>
        <span className="absolute bottom-0 text-sm bg-white/80 text-black py-1 px-2">
          Supplier: <strong>{supplier_name}</strong>
        </span>
      </div>
      <div className="p-4 bg-[#222732] text-white rounded-b-lg">
        <h3 className="text-xl">{name}</h3>
        <h2 className="text-3xl py-2">${price}</h2>

        <div className="flex items-center justify-between border-t border-slate-700 pt-2 text-slate-400 text-sm">
                  <h4>Available: {quantity}</h4>
                  <button className="bg-indigo-700 hover:bg-indigo-600 text-white p-1 rounded">Stock Update</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
