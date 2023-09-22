import "./App.css";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import CheckOut from "./components/Pages/CheckOut";
import ProductDetail from "./components/Pages/ProductDetails";
import { Route, Routes } from "react-router";
import Login from "./components/Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Pages/ProtectedRoute";
function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Login></Login>} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
