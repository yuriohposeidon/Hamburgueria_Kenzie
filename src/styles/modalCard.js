import styled from "styled-components";

export const StyledModalCard = styled.li`

    display: flex;

    .background__img{
        background-color: var(--color-gray-2);

        border-radius: 0.5rem;

        width: 8.2rem;
    }

    .card__img{
        width: 8.2rem;
    }

    .organization__container{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        width: 100%;

        padding: 1rem;
    }

    .card__name{
        font-size: 1.8rem;
        font-weight: 700;
    }
`