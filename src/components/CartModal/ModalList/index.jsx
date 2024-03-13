import { StyledModalList } from "../../../styles/modalList"
import { ModalCard } from "./ModalCard"

export const ModalList = ({cartList, removeProductCart}) => {
  return (
    <StyledModalList>
      {cartList.map(productNew => (
        <ModalCard key={productNew.id} removeProductCart={removeProductCart} productNew={productNew} />

      ))}
    </StyledModalList>
  )
}

