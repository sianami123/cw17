import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function ChakraPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <Button colorScheme="blue" onClick={() => navigate("/")}>
        back to home page
      </Button>
    </div>
  );
}
