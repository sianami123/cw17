import { IproductContextType } from "./types";
import { createContext } from "react";

export const productContext = createContext<IproductContextType | undefined>(
  undefined
);
