export interface Iproduct {
  image: string;
  name: string;
  price: number;
  star: number;
  id?: number;
  cartItem?: number;
}

export type IproductsArray = Iproduct[];

export type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Iproduct }
  | { type: "REMOVE_PRODUCT"; payload: number }
  | { type: "UPDATE_PRODUCT"; payload: Iproduct };

export interface IproductContextType {
  state: IproductsArray;
  dispatch: React.Dispatch<ProductAction>;
  setShowCartModal: (show: boolean) => void;
}
