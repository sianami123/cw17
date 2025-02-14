import { useContext } from "react";
import { productContext } from "../../pages/shop_page";

export default function CartModal() {
  const contextData = useContext(productContext);
  if (!contextData) return null;
  const { setShowCartModal, state: cartData, dispatch } = contextData;
  return (
    <div className="fixed z-50 w-1/2 top-0 right-0 bottom-0 bg-black">
      <header className="flex justify-between items-center p-4 bg-gray-500">
        <button onClick={() => setShowCartModal(false)} className="text-white">
          X
        </button>
        <h2 className="text-white">cart</h2>
        <div className="text-white"></div>
      </header>
      <main>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 p-2">
            {cartData?.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col">
                    <p className="text-white">{product.name}</p>
                    <p className="text-white">₹ {product.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col p-2 border-2 border-white rounded-md bg-gray-300">
                    <button
                      onClick={() => {
                        dispatch?.({
                          type: "UPDATE_PRODUCT",
                          payload: {
                            ...product,
                            cartItem: product.cartItem
                              ? product.cartItem + 1
                              : 1,
                          },
                        });
                      }}
                      className=""
                    >
                      +
                    </button>
                    <span className="">{product.cartItem ?? 1}</span>
                    <button
                      onClick={() => {
                        if (product.cartItem && product.cartItem > 1) {
                          dispatch?.({
                            type: "UPDATE_PRODUCT",
                            payload: {
                              ...product,
                              cartItem: product.cartItem - 1,
                            },
                          });
                        } else {
                          if (product.id) {
                            dispatch?.({
                              type: "REMOVE_PRODUCT",
                              payload: product.id,
                            });
                          }
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      if (product.id) {
                        dispatch?.({
                          type: "REMOVE_PRODUCT",
                          payload: product.id,
                        });
                      }
                    }}
                    className="text-white"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
