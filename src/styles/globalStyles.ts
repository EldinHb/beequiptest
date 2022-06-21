import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100vh;
        margin: 0;
        z-index: 1;
        /* background-color: #f5f5f5; */
    }

    body {
        margin: 0;
        min-height: 100vh;
    }

    #root {
        height: 100vh;
    }
`;

export default GlobalStyle;