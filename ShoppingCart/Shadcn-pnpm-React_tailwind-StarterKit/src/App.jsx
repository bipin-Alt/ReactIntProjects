import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path="/products" element ={<Products/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
     
    </>
  );
}

export default App;
