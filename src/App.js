import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import RedirectToInventories from "./components/RedirectToInventories/RedirectToInventories";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import SignUp from "./components/SignUp/SignUp";
import auth from "./firebase.init";

export const itemsContextApi = createContext();

function App() {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [deletePopup, setDeletePopup] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [itemCount, setItemCOunt] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [productPerPage, setProductPerPage] = useState(10);

  useEffect(() => {
    fetch("https://auto-world026.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        setItemCOunt(count);
        const pages = Math.ceil(count / productPerPage);
        setPageCount(pages);
      });
  }, [items]);
  useEffect(() => {
    fetch(
      `https://auto-world026.herokuapp.com/products/?page=${selectedPage}&items=${productPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items, selectedPage, productPerPage]);

  const navigate = useNavigate();

  //Handle Update
  const handleUpdate = (_id) => {
    navigate(`/product/${_id}`);
  };

  // Handle Delete
  const handleDelete = (_id) => {
    const url = `https://auto-world026.herokuapp.com/product/${_id}`;

    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "success") {
          toast.success("Item deleted!");
        } else {
          toast.error("Unauthorize access  ");
        }
        setDeletePopup(false);
      });
  };

  //Handle Pop Up

  const popupHandler = (id) => {
    setDeletePopup(!deletePopup);
    setDeleteId(id);
  };

  return (
    <div>
      <Header></Header>
      <itemsContextApi.Provider
        value={[
          items,
          handleUpdate,
          handleDelete,
          deleteId,
          deletePopup,
          setDeletePopup,
          popupHandler,
          pageCount,
          setPageCount,
          selectedPage,
          setSelectedPage,
          productPerPage,
          setProductPerPage,
          itemCount,
        ]}
      >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/manage-inventories"
            element={
              <RequireAuth>
                <ManageInventories></ManageInventories>
              </RequireAuth>
            }
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
          <Route
            path="/sign-up"
            element={
              <RedirectToInventories>
                <SignUp></SignUp>
              </RedirectToInventories>
            }
          ></Route>
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
