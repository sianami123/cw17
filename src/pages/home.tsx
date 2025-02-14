import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
export default function Home() {
  const navigate = useNavigate();
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

      <ul className="flex justify-center items-center gap-4">
        <li>
          <Button colorScheme="blue" onClick={() => navigate("/shop")}>
            shop
          </Button>
        </li>
        <li>
          <Button colorScheme="blue" onClick={() => navigate("/chakra")}>
            chakra
          </Button>
        </li>
      </ul>
    </div>
  );
}
