import React, { useEffect, useState } from "react";
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
      <div className="container mx-auto" style={{maxWidth:'1000px'}}>
        <div className="grid grid-cols-3 gap-5">
          {items.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
