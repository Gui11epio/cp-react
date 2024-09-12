import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    #root{
        width: 100vw;
        min-height: 100vw;
        display: flex;
        flex-direction: column;
    }

`

export default GlobalStyle