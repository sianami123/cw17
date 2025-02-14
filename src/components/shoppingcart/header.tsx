import bagIcon from "../../assets/bag-icon.svg";
import { useContext } from "react";
import { productContext } from "../../pages/shop_page";

export default function Header() {
  const stateData = useContext(productContext)?.state;
  const setShowCartModal = useContext(productContext)?.setShowCartModal;
  if (!setShowCartModal) return null;
  return (
    <header className="flex justify-between items-center bg-gray-800 p-4">
      <div>React Shopping Cart</div>
      <div>
        <button
          onClick={() => setShowCartModal(true)}
          className="flex items-center"
        >
          <img src={bagIcon} alt="bag-icon" />
          <span className="rounded-[50%] w-5 h-5 bg-red-500 p-2 flex items-center justify-center">
            {stateData?.length}
          </span>
        </button>
      </div>
    </header>
  );
}
