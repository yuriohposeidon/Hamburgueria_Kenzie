import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --color-gray-0: #FFFFFF;
        --color-gray-1: #F5F5F5;
        --color-gray-2: #E0E0E0;
        --color-gray-3: #BDBDBD;
        --color-gray-4: #828282;
        --color-gray-5: #333333;
        font-family: 'Inter', sans-serif;
        font-size: 62.5%;
    }

    main{
        max-width: 140rem;
        width: 90%;
        margin: 0 auto;
    }

    button,select, input{
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
`;