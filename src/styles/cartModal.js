import styled from "styled-components";

export const StyledCartModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.35);

  .modal__container {
    width: clamp(30rem, 40vw, 50rem);

    padding: 1rem;

    background-color: var(--color-gray-1);

    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  .title__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-primary);
    color: var(--color-gray-0);

    padding: 1.5rem;
    margin-bottom: 2rem;

    border-radius: 5px 5px 0px 0px;
  }

  .title__modal {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .close__modal {
    font-size: 1.4rem;
    font-weight: 400;

    color: var(--color-gray-0);
  }

  .button__delete {
    font-size: 1.6rem;
    font-weight: 600;

    color: var(--color-gray-4);
    background-color: var(--color-gray-2);

    width: 100%;

    margin-top: 2rem;
    padding: 1.5rem;

    border-radius: 0.8rem;
  }
`;
