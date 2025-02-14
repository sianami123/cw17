import ShoppingCartProduct from "./shop_product";
import Header from "./header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "../../pages/shop_page";

export default function Shop() {
  const [productsData, setProductsData] = useState<Iproduct[]>([]);

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
    fetchProducts();
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <main className="flex flex-wrap p-2 gap-2">
        {productsData?.map((product) => (
          <div key={product.id}>
            <ShoppingCartProduct
<<<<<<< HEAD:src/components/shoppingcart/shop.tsx
              id={product.id}
=======
>>>>>>> ebc945a67e0504aaa6e457ac6650fb60d8a443b5:src/components/shoppingcart/shoppingcart.tsx
              img={product.image}
              name={product.name}
              price={product.price}
              star={product.star}
<<<<<<< HEAD:src/components/shoppingcart/shop.tsx
=======
              id={product.id}
>>>>>>> ebc945a67e0504aaa6e457ac6650fb60d8a443b5:src/components/shoppingcart/shoppingcart.tsx
            />
          </div>
        ))}
      </main>
    </div>
  );
}
