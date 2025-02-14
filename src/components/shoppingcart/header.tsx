import bagIcon from "../../assets/bag-icon.svg";
import { productContext } from "../../App";
import { useContext } from "react";

export default function Header() {
  const contextData = useContext(productContext);
  const setShowCart = contextData?.setShowCart;
  const cartData = contextData?.state;
  console.log(setShowCart);
  return (
    <header className="flex justify-between items-center bg-gray-200 p-4">
      <div>React Shopping Cart</div>
      <div>
        <button
          onClick={() => {
            if (setShowCart) {
              setShowCart(true);
            }
          }}
          className="flex items-center"
        >
          <img src={bagIcon} alt="bag-icon" />
          <span className="rounded-[50%] w-5 h-5 bg-red-500 p-2 flex items-center justify-center">
            {cartData?.length}
          </span>
        </button>
      </div>
    </header>
  );
}
