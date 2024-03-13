import { StyledCartModal } from "../../styles/cartModal";
import { ModalList } from "./ModalList";
import { TotalValue } from "./TotalValue";

export const CartModal = ({ cartList, removeProductCart, removeAllProducts, toggleModal, modalRef, buttonRef }) => {
  return (
    <StyledCartModal>
      <div ref={modalRef} className="modal__container" role="dialog">
        <div className="title__container">
          <h2 className="title__modal">Carrinho de Compras</h2>
          <button ref={buttonRef} className="close__modal" onClick={toggleModal}>X</button>
        </div>
        <ModalList removeProductCart={removeProductCart} cartList={cartList} />
        <TotalValue cartList={cartList} />
        <button className="button__delete" onClick={removeAllProducts}>Remover todos</button>
      </div>
    </StyledCartModal>
  );
};
