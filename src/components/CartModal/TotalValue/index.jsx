import { StyledTotalValue } from "../../../styles/totalValue";

export const TotalValue = ({cartList}) => {

  const valueTotal = cartList.reduce((accumulator, productValue) => {
    return accumulator + Number(productValue.price)
  }, 0)

  return (
    <StyledTotalValue>
      <span className="title__total">Total</span>
      <span className="value__total"> R$ {valueTotal.toFixed(2)}</span>
    </StyledTotalValue>
  )
};