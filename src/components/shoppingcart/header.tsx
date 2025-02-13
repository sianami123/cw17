import bagIcon from "../../assets/bag-icon.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-4">
      <div>React Shopping Cart</div>
      <div>
        <button className="flex items-center">
          <img src={bagIcon} alt="bag-icon" />
          <span className="rounded-[50%] w-5 h-5 bg-red-500 p-2 flex items-center justify-center">
            1
          </span>
        </button>
      </div>
    </header>
  );
}
