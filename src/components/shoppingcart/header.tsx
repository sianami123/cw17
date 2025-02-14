import bagIcon from "../../assets/bag-icon.svg";
<<<<<<< HEAD
import { useContext } from "react";
import { productContext } from "../../pages/shop_page";

export default function Header() {
  const stateData = useContext(productContext)?.state;
  const setShowCartModal = useContext(productContext)?.setShowCartModal;
  if (!setShowCartModal) return null;
=======
import { productContext } from "../../App";
import { useContext } from "react";

export default function Header() {
  const contextData = useContext(productContext);
  const setShowCart = contextData?.setShowCart;
  const cartData = contextData?.state;
  console.log(setShowCart);
>>>>>>> ebc945a67e0504aaa6e457ac6650fb60d8a443b5
  return (
    <header className="flex justify-between items-center bg-gray-800 p-4">
      <div>React Shopping Cart</div>
      <div>
        <button
<<<<<<< HEAD
          onClick={() => setShowCartModal(true)}
=======
          onClick={() => {
            if (setShowCart) {
              setShowCart(true);
            }
          }}
>>>>>>> ebc945a67e0504aaa6e457ac6650fb60d8a443b5
          className="flex items-center"
        >
          <img src={bagIcon} alt="bag-icon" />
          <span className="rounded-[50%] w-5 h-5 bg-red-500 p-2 flex items-center justify-center">
<<<<<<< HEAD
            {stateData?.length}
=======
            {cartData?.length}
>>>>>>> ebc945a67e0504aaa6e457ac6650fb60d8a443b5
          </span>
        </button>
      </div>
    </header>
  );
}
