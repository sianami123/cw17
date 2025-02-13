import prod1 from "../../assets/prod1.png";
import ShoppingCartProduct from "./shoppingcart_product";
import Header from "./header";
import { useContext, useEffect, useState } from "react";
import { productContext } from "../../App";
import axios from "axios";
import { Iproduct } from "../../App";

export default function ShoppingCart() {
  const [productsData, setProductsData] = useState<Iproduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(
          "https://67add5d63f5a4e1477df4bc8.mockapi.io/shop/product"
        );
        if (res.status === 200) {
          setProductsData(res.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <main className="flex flex-wrap p-2 gap-2">
        {productsData?.map((product) => (
          <ShoppingCartProduct
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
            star={product.star}
          />
        ))}
      </main>
    </div>
  );
}
