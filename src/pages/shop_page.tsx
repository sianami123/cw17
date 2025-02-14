import { useState } from "react";
import { useReducer } from "react";
import Shop from "../components/shoppingcart/shop";
import CartModal from "../components/shoppingcart/cart_modal";

import { productContext } from "../components/shoppingcart/context";
import { productReducer } from "../components/shoppingcart/reducer";

export default function ShopPage() {
  const [state, dispatch] = useReducer(productReducer, []);
  const [showCartModal, setShowCartModal] = useState(false);
  return (
    <productContext.Provider value={{ state, dispatch, setShowCartModal }}>
      {showCartModal && <CartModal />}
      <Shop />
    </productContext.Provider>
  );
}
