import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemsContextApi } from "../../App";

const InventoryDetails = () => {
  const [inventory, setInventory] = useState({});
  const [items] = useContext(itemsContextApi);
  const { id } = useParams();
  useEffect(() => {
    setInventory(items.find((item) => item.id === parseInt(id)));
  }, []);
  console.log(inventory);
  return <div></div>;
};

export default InventoryDetails;
