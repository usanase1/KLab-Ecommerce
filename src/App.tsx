import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardApp } from "./DashboardApp";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Layout from "./Layout/Layout";
import Logout from "./components/Logout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/register" element={<PublicRoute element={<RegisterPage />} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
        <Route path="/dashboard/*" element={<ProtectedRoute roles={["admin"]} element={<DashboardApp />} />} />
        <Route path="/category/:categoryName" element={<Layout><CategoryPage /></Layout>} />
        <Route path="/product/:productId" element={<Layout><ProductsPage /></Layout>} />
        <Route path="/cart" element={<Layout><CartPage /></Layout>} />
        <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
        <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
        <Route path="/orders" element={<Layout><OrdersPage /></Layout>} />
        <Route path="/orders/success/:orderId" element={<Layout><OrderSuccessPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
