import button__delete from "../../../../assets/delete.png";
import { StyledModalCard } from "../../../../styles/modalCard";

export const ModalCard = ({ productNew, removeProductCart }) => {
  return (
    <StyledModalCard>
      <div className="background__img">
        <img className="card__img" src={productNew.img} alt={productNew.name} />
      </div>
      <div className="organization__container">
        <span className="card__name">{productNew.name}</span>
        <button className="card__button" onClick={() => removeProductCart(productNew.id)}>
          <img src={button__delete} alt="button delete" />
        </button>
      </div>
    </StyledModalCard>
  );
};
