import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=> state.user.currentUser)
  const RequireAuth = ({ children }) => {
    return user ===null ? <Navigate to="/login" /> : children;
  };
  console.log("User- "+user) 
  return (
    <Router>
      <Routes>
        
        <Route path='/'>
          <Route path='/login' element={<Login/>}/>
          <Route index element={<RequireAuth><Home/></RequireAuth>}/>
        </Route>
      </Routes>
      
    </Router>

  );
}

export default App;

// <Routes>
//         <Route path='/users' element={<UserList/>}/>
//       </Routes>
//       <Routes>
//         <Route path='/user/:userId' element={<User/>}/>
//       </Routes>
//       <Routes>
//         <Route path='/newUser' element={<NewUser />}/>
//       </Routes>
//       <Routes>
//         <Route path='/products' element={<ProductList/>}/>
//       </Routes>
//       <Routes>
//         <Route path='/product/:productId' element={<Product />}/>
//       </Routes>
//       <Routes>
//         <Route path='/newproduct' element={<NewProduct />}/>
//       </Routes>
//       <Routes>
        
//       </Routes>

    // <Router>
    //   <Switch>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //     { admin && (
    //       <>
    //     <Topbar />
    //     <div className="container">
    //       <Sidebar />
        
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/users">
    //         <UserList />
    //       </Route>
    //       <Route path="/user/:userId">
    //         <User />
    //       </Route>
    //       <Route path="/newUser">
    //         <NewUser />
    //       </Route>
    //       <Route path="/products">
    //         <ProductList />
    //       </Route>
    //       <Route path="/product/:productId">
    //         <Product />
    //       </Route>
    //       <Route path="/newproduct">
    //         <NewProduct />
    //       </Route>
        
    //   </div>
    //   </>
    //       )}
    //   </Switch>
    // </Router>