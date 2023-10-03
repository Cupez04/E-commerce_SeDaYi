import { Routes, Route, Navigate } from "react-router-dom";

//import components
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDeatils from "../pages/ProductDeatils";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}></Route>
      <Route path="home" element={<Home/>} />
      {/* <Route path="shop" element={<Shop/>} /> */}
      {/* <Route path="shop/:id" element={<ProductDeatils/>} /> */}
      {/* <Route path="cart" element={<Cart/>} /> */}
      <Route path="checkout" element={<ProtectedRoute>
        <Checkout/>
      </ProtectedRoute>} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<Signup/>} />
    </Routes>
  )
    
};

export default Routers;
