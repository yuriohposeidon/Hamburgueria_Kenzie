import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0px;
  margin: 0 auto;

  background-color: var(--color-gray-1);

  margin-bottom: 3rem;

  .header__organization {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 1rem;
  }

  .header__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    max-width: 150rem;
    width: 90%;

    margin: 0 auto;
    padding: 1.5rem;
  }

  .logotipo {
    width: 15rem;
    height: 2.3rem;
  }

  .input__container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .combination__container {
    border: 0.2rem solid var(--color-gray-2);
    border-radius: 0.8rem;

    background-color: var(--color-gray-0);

    width: 100%;
  }

  .form__container {
    display: flex;
    align-items: center;

    height: 5rem;

    width: 100%;
  }

  .input__header {
    width: 200px;
    border: transparent;

    height: 5rem;
    padding-left: 1.5rem;

    width: 100%;
  }

  .input__header::placeholder {
    color: var(--color-gray-2);
    border: transparent;
  }

  .input__header:focus {
    outline: transparent;
  }

  .button__header {
    border: transparent;
    background-color: transparent;

    width: 5.3rem;
    height: 4rem;

    margin-right: 1.5rem;
  }

  @media (min-width: 800px) {
    .header__container {
      display: flex;
      flex-direction: row;
      align-items: center;

      max-width: 150rem;
      width: 95%;
    }

    .header__organization {
      width: 100%;
      padding-right: 1rem;
    }

    .input__container{
      width: 40rem;
    }
  }
`;
