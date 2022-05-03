import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import Login from "./components/Login/Login";
import ManageInventories from "./components/ManageInventories/ManageInventories";
import MyItems from "./components/MyItems/MyItems";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import SignUp from "./components/SignUp/SignUp";

export const itemsContextApi = createContext();

function App() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const handleUpdate = (_id) => {
    navigate(`/product/${_id}`);
  };

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);
  return (
    <div>
      <Header></Header>
      <itemsContextApi.Provider value={[items, handleUpdate]}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/manage-inventories"
            element={<ManageInventories></ManageInventories>}
          ></Route>
          <Route
            path="/add-item"
            element={
              <RequireAuth>
                <AddItem></AddItem>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/my-items"
            element={
              <RequireAuth>
                <MyItems></MyItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/product/:_id"
            element={<InventoryDetails></InventoryDetails>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route
            path="/reset-password"
            element={<ResetPassword></ResetPassword>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </itemsContextApi.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
