import { ChakraProvider } from "@chakra-ui/react";
import ShopPage from "./pages/shop_page";
import { BrowserRouter, Routes, Route } from "react-router";
import ChakraPage from "./pages/chakra_page";
import Home from "./pages/home";
import DashboardPage from "./pages/dashboard/dashboard_page";
import OrdersPage from "./pages/dashboard/orders_page";
import UserPage from "./pages/dashboard/user_page";
import ProductPage from "./pages/product_page";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="chakra" element={<ChakraPage />} />
          <Route path="product/:productId" element={<ProductPage />} />
          <Route path="dashboard">
            <Route index element={<DashboardPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="user" element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
