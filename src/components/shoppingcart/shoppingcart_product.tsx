import { useContext } from "react";
import { productContext } from "../../App";

interface ShoppingCartProductProps {
  img: string;
  name: string;
  price: number;
  star: number;
  id?: number;
}

export default function ShoppingCartProduct({
  img,
  name,
  price,
  star,
  id,
}: ShoppingCartProductProps) {
  const dispatchData = useContext(productContext)?.dispatch;
  console.log(dispatchData);

  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md"
    >
      <img className="w-44 h-44" src={img} />
      <div className="text-white">{star}</div>
      <p className="text-white">{name}</p>
      <p className="text-white">₹ {price}</p>
      <button
        onClick={() => {
          dispatchData?.({
            type: "ADD_PRODUCT",
            payload: { image: img, name, price, star, id },
          });
        }}
        className="bg-gray-300 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
