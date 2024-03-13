import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  gap: 2rem;

  overflow-x: scroll;

  @media (min-width: 800px) {
    overflow: hidden;

    flex-wrap: wrap;
    gap: 6rem;
  }
`;