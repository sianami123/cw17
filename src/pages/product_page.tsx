import { useParams } from "react-router";

const ProductPage = () => {
  const params = useParams();
  return (
    <div>
      <p>ProductPage : {params.productId}</p>
    </div>
  );
};

export default ProductPage;
