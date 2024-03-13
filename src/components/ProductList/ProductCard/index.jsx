import { StyledProductCard } from "../../../styles/productCard";

export const ProductCard = ({ product, addProductList }) => {
  return (
    <StyledProductCard>
      <div className="img__container">
      <img className="product__img" src={product.img} alt={product.name} />
      </div>

      <div className="content__container">
      <h2 className="product__name">{product.name}</h2>
      <p className="product__caterogy">{product.category}</p>
      <span className="product__price">R$ {product.price.toFixed(2)}</span>
      <button onClick={() => addProductList(product)} className="product__button">Adicionar</button>
      </div>
    </StyledProductCard>
  );
};
