import { useContext } from "react";
import { productContext } from "./shop";

export default function CartModal() {
  const setShowCartModal = useContext(productContext)?.setShowCartModal;
  const stateData = useContext(productContext)?.state;
  if (!setShowCartModal) return null;
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
          <div className="flex justify-between items-center">
            {stateData?.map((product) => (
              <div
                className="flex justify-between items-center"
                key={product.id}
              >
                <img src={product.image} alt={product.name} />
                <p className="text-white">{product.name}</p>
                <p className="text-white">₹ {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
