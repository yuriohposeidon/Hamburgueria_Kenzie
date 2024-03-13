import logo from "../../assets/logo.png";
import { StyledHeader } from "../../styles/header";
import { FormHeader } from "./FormHeader";
import cart from "../../assets/cart.png";

export const Header = ({ inputSearch, setInputSearch, toggleModal }) => {

  return (
    <StyledHeader>
      <div className="header__container">
        <div className="header__organization">
          <img className="logotipo" src={logo} alt="Burguer Kenzie" />
          <button onClick={toggleModal}>
            <img src={cart} alt="carrinho de compras" />
          </button>
        </div>
        <FormHeader inputSearch={inputSearch} setInputSearch={setInputSearch} />
      </div>
    </StyledHeader>
  );
};