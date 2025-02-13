import axios from "axios";
import ShoppingCartPage from "./pages/shoppingcart";
import { useReducer, createContext, useEffect } from "react";
import CartModal from "./components/cart_modal/cart_modal";

export interface Iproduct {
  image: string;
  name: string;
  price: number;
  star: number;
  id?: number;
  cartItem?: number;
}

type IproductsArray = Iproduct[];

type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Iproduct }
  | { type: "REMOVE_PRODUCT"; payload: number }
  | { type: "SAVE_PRODUCT"; payload: Iproduct[] }
  | { type: "UPDATE_PRODUCT"; payload: Iproduct };

const productReducer = (state: IproductsArray, action: ProductAction) => {
  switch (action.type) {
    case "SAVE_PRODUCT":
      return action.payload;
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
}

export const productContext = createContext<IproductContextType | undefined>(
  undefined
);

function App() {
  const [state, dispatch] = useReducer(productReducer, []);

  console.log(state);
  return (
    <productContext.Provider value={{ state, dispatch }}>
      {/* <CartModal /> */}
      <ShoppingCartPage />
    </productContext.Provider>
  );
}

export default App;
