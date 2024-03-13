import styled from "styled-components";

export const StyledTotalValue = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 0.2rem solid var(--color-gray-2);

    padding-top: 1.5rem;
    margin-top: 2rem;

    .title__total{
        font-size: 1.4rem;
        font-weight: 600;
        
        color: var(--color-gray-5);
    }

    .value__total{
        font-size: 1.4rem;
        font-weight: 600;
        
        color: var(--color-gray-4);
    }

`