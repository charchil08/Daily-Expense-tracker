import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle