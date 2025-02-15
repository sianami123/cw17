import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <ul className="flex justify-center items-center gap-4">
        <li className="text-white bg-blue-500 p-2 rounded-md">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="text-white bg-blue-500 p-2 rounded-md">
          <Link to="/chakra">Chakra</Link>
        </li>
      </ul>
    </div>
  );
}
