<<<<<<< HEAD
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
=======
import axios from "axios";
import ShoppingCartPage from "./pages/shoppingcart";
import { useReducer, createContext, useEffect, useState } from "react";
import CartModal from "./components/cart_modal/cart_modal";

export interface Iproduct {
  image: string;
  name: string;
  price: number;
  star: number;
  id?: number;
  cartItem: number;
}

type IproductsArray = Iproduct[];

type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Iproduct }
  | { type: "REMOVE_PRODUCT"; payload: number }
  | { type: "UPDATE_PRODUCT"; payload: Iproduct };

const productReducer = (state: IproductsArray, action: ProductAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "REMOVE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    case "UPDATE_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    default:
      return state;
  }
};

interface IproductContextType {
  state: IproductsArray;
  dispatch: React.Dispatch<ProductAction>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const productContext = createContext<IproductContextType | undefined>(
  undefined
);

function App() {
  const [cartState, dispatch] = useReducer(productReducer, []);
  const [showCart, setShowCart] = useState(false);

  console.log(cartState);
  return (
    <productContext.Provider
      value={{ state: cartState, dispatch, showCart, setShowCart }}
    >
      {showCart && <CartModal />}
      <ShoppingCartPage />
    </productContext.Provider>
>>>>>>> ebc945a67e0504aaa6e457ac6650fb60d8a443b5
  );
}

export default App;
