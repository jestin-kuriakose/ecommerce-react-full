import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  //const cUser = user.currentUser ? user.currentUser : false;
  const admin = user.currentUser ? user.currentUser.isAdmin : false;
  //const admin = true;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        { admin && (
          <>
          
            
            
              <Route path="/" element={<Home />}></Route>

              <Route path="/users" element={<UserList />}></Route>            
              
              <Route path="/user/:userId" element={<User />}></Route>            
              
              <Route path="/newUser" element={<NewUser />}></Route>           
              
              <Route path="/products" element={<ProductList />}></Route>            
              
              <Route path="/product/:productId" element={<Product />}></Route>           
              
              <Route path="/newproduct" element={<NewProduct />}></Route>

              
         
      </>
          )}
    </Routes>
  </Router>
  );
}

export default App;
