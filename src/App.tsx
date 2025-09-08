import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Header from "./components/Header";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Layout from "./Layout/Layout";

export default function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="category/:categoryName" element={<CategoryPage />} />
         <Route path="product/:productId" element={<ProductsPage />} />
         <Route path="cart" element={<CartPage />} />
       </Route>
     </Routes>
   </BrowserRouter>
  );
}
