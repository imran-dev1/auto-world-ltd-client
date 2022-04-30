import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ManageInventories from "./components/ManageInventories/ManageInventories";

export const itemsContextApi = createContext();

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <itemsContextApi.Provider value={items}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/manage-inventories"
            element={<ManageInventories></ManageInventories>}
          ></Route>
        </Routes>
      </itemsContextApi.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
