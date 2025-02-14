import { createContext, useState } from "react";
import { useReducer } from "react";
import Shop from "../components/shoppingcart/shop";

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
  | { type: "UPDATE_PRODUCT"; payload: Iproduct };

interface IproductContextType {
  state: IproductsArray;
  dispatch: React.Dispatch<ProductAction>;
  setShowCartModal: (show: false) => void;
}

export const productContext = createContext<IproductContextType | undefined>(
  undefined
);

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

export default function ShopPage() {
  const [state, dispatch] = useReducer(productReducer, []);
  const [showCartModal, setShowCartModal] = useState(false);
  return (
    <productContext.Provider value={{ state, dispatch, setShowCartModal }}>
      <Shop />
    </productContext.Provider>
  );
}
