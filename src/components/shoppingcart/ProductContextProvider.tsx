import { useReducer, useState, ReactNode } from "react";
import { productContext } from "./context";
import { productReducer } from "./reducer";

interface ProductContextProviderProps {
  children: ReactNode;
}

export default function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [state, dispatch] = useReducer(productReducer, []);
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <productContext.Provider value={{ state, dispatch, setShowCartModal }}>
      {children}
    </productContext.Provider>
  );
}
