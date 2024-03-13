import styled from "styled-components";

export const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 0.2rem solid var(--color-gray-2);
  border-radius: 0.5rem;

  min-width: 30rem;
  height: 34.6rem;

  .img__container {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-gray-1);

    width: 100%;
    height: 14rem;
  }

  .product__img {
    text-align: center;
    height: 140px;
  }

  .content__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1.5rem;
  }

  .product__name {
    font-size: 1.8rem;
    font-weight: 700;

    height: 3.5rem;
  }

  .product__category {
    font-size: 1.6rem;
    font-weight: 400;
  }

  .product__price {
    font-size: 1.4rem;
    font-weight: 600;

    color: var(--color-primary);
  }

  .product__button {
    font-size: 14px;
    font-weight: 600;

    color: var(--color-gray-0);
    background-color: var(--color-gray-3);

    width: 10.3rem;
    height: 4rem;

    border-radius: 0.8rem;
  }

  .product__button:hover {
    background-color: var(--color-primary);
  }
`;
