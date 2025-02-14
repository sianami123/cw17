import { useContext } from "react";
import { productContext } from "../../App";

interface ShoppingCartProductProps {
  img: string;
  name: string;
  price: number;
  star: number;
  id?: number;
  cartItem?: number;
}

export default function ShoppingCartProduct({
  img,
  name,
  price,
  star,
  id,
  cartItem,
}: ShoppingCartProductProps) {
  const dispatchData = useContext(productContext)?.dispatch;
  const cartData = useContext(productContext)?.state;
  const dispatch = useContext(productContext)?.dispatch;

  return (
    <div
      className={`flex flex-col items-center justify-center border-2 rounded-md ${
        cartData?.find((product) => product.id === id)
          ? "border-green-600"
          : "border-gray-300"
      }`}
    >
      <img className="w-44 h-44" src={img} />
      <div className="text-white">{star}</div>
      <p className="text-white">{name}</p>
      <p className="text-white">₹ {price}</p>
      {cartData?.find((product) => product.id === id) ? (
        <div className="flex items-center justify-center gap-6">
          <button
            className="bg-gray-300"
            onClick={() => {
              if (cartItem === undefined) {
                console.log(id, price, name, img, star, cartItem);
                dispatch?.({
                  type: "UPDATE_PRODUCT",
                  payload: {
                    id: id,
                    price: price,
                    name: name,
                    image: img,
                    star: star,
                    cartItem: 1,
                  },
                });
              } else {
                dispatch?.({
                  type: "UPDATE_PRODUCT",
                  payload: {
                    id: id,
                    price: price,
                    name: name,
                    image: img,
                    star: star,
                    cartItem: cartItem + 1,
                  },
                });
              }
            }}
          >
            +
          </button>
          <span className="text-white">{cartItem}</span>
        </div>
      ) : (
        <button
          onClick={() => {
            dispatchData?.({
              type: "ADD_PRODUCT",
              payload: { image: img, name, price, star, id, cartItem: 1 },
            });
          }}
          className="bg-gray-300 w-full"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
