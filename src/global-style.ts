import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    #root{
        height: 95vh;
        width: 100%;
        display: grid;
        flex-direction: column;
    }

`

export default GlobalStyle