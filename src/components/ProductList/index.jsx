import { StyledProductList } from "../../styles/productList";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, addProductList }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addProductList={addProductList} />
      ))}
    </StyledProductList>
  );
};
