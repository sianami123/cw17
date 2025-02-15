import { useContext } from "react";
import { productContext } from "./context";

interface ShoppingCartProductProps {
  img: string;
  name: string;
  price: number;
  star: number;
  id?: number;
  cartItem?: number;
}

export default function ShopCard({
  img,
  name,
  price,
  star,
  id,
  cartItem,
}: ShoppingCartProductProps) {
  const contextData = useContext(productContext);
  const dispatch = contextData?.dispatch;
  const cartData = contextData?.state;

  const currentCartItem =
    cartData?.find((product) => product.id === id)?.cartItem ?? cartItem;

  return (
    <div
      key={id}
      className={`flex flex-col rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
        cartData?.some((product) => product.id === id)
          ? "border-2 border-green-500 bg-green-50"
          : "bg-white"
      }`}
    >
      <div className="p-2">
        <div className="relative mb-4">
          <img
            className="w-full h-48 object-cover rounded-md"
            src={img}
            alt={name}
          />
        </div>
        <div className="flex items-center">
          {(() => {
            const stars = [];
            for (let i = 0; i < star; i++) {
              stars.push(
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              );
            }
            return stars;
          })()}
        </div>

        <h3 className="font-semibold text-gray-800 text-lg mb-2">{name}</h3>
        <p className="text-green-600 font-bold text-xl mb-4">₹{price}</p>
      </div>

      {cartData?.find((product) => product.id === id) ? (
        <div className="flex items-center justify-between mt-auto px-2">
          <button
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 font-bold transition-colors"
            onClick={() => {
              dispatch?.({
                type: "UPDATE_PRODUCT",
                payload: {
                  id: id,
                  price: price,
                  name: name,
                  image: img,
                  star: star,
                  cartItem: (currentCartItem ?? 0) + 1,
                },
              });
            }}
          >
            +
          </button>
          <span className="text-gray-800 font-semibold text-lg">
            {currentCartItem}
          </span>
          <button
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 font-bold transition-colors"
            onClick={() => {
              if (currentCartItem && currentCartItem > 1) {
                dispatch?.({
                  type: "UPDATE_PRODUCT",
                  payload: {
                    id: id,
                    price: price,
                    name: name,
                    image: img,
                    star: star,
                    cartItem: currentCartItem - 1,
                  },
                });
              }
            }}
          >
            -
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            dispatch?.({
              type: "ADD_PRODUCT",
              payload: { image: img, name, price, star, id, cartItem: 1 },
            });
          }}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
