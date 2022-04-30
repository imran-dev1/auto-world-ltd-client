import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Item from "./Item/Item";

const ItemsSection = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="pt-24 pb-52 px-3">
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
          <span className="text-2xl md:text-4xl font-extrabold">
            Most Demanded
          </span>
          <Link to="/">
            <span className="flex items-center gap-2 text-xl">
              All Items <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
