import ShoppingCartProduct from "./shop_card";
import Header from "./header";
import { useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import { Iproduct } from "./types";

export default function Shop() {
  const [productsData, setProductsData] = useState<Iproduct[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) =>
      product.name
        .toLowerCase()
        .includes(inputRef.current?.value?.toLowerCase() ?? "")
    );
  }, [productsData, inputRef.current?.value]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(
          "https://67add5d63f5a4e1477df4bc8.mockapi.io/shop/product"
        );
        if (res.status === 200) {
          setProductsData(res.data);
          console.log(res.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    inputRef.current?.focus();
    fetchProducts();
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <div className="flex justify-center items-center gap-2 my-1">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md"
          ref={inputRef}
        />
        <button className="p-2 rounded-md bg-blue-500 text-white">
          Search
        </button>
      </div>
      <main className="flex flex-wrap p-2 gap-2">
        {productsData?.map((product) => (
          <div key={product.id}>
            <ShoppingCartProduct
              id={product.id}
              img={product.image}
              name={product.name}
              price={product.price}
              star={product.star}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
