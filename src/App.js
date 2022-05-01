import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageInventories from "./components/ManageInventories/ManageInventories";
import MyItems from "./components/MyItems/MyItems";
import NotFound from "./components/NotFound/NotFound";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import SignUp from "./components/SignUp/SignUp";

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
          <Route path="/add-item" element={<AddItem></AddItem>}></Route>
          <Route path="/my-items" element={<MyItems></MyItems>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/reset-password" element={<ResetPassword></ResetPassword>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </itemsContextApi.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
