import styled from "styled-components";

export const HeaderCabec = styled.header`

    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    text-align: left;

    #logo{
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    h1{
        align-items: center;
        text-align: right;
        align-self: center;
        justify-content: right;
    }

    #icone{
        
    }

`
export const CorpoPrincipal =styled.main`

    height: 100vh; /* Ajuste conforme necessário */
    width: 100%; /* Ajuste conforme necessário */
    flex-grow: 1;

`

export const SecPropagandas = styled.div`

    box-sizing: border-box;
    width: 350px;
    height: 500px;
    border: 5px solid black;
    padding: 20px;
    

    #aparelhos{
        box-sizing: border-box;
        padding: 20px;
        height:450px;
        width: auto;
        flex-direction: column;  
        display: flex;
        justify-content: space-between;

    }

    img{
        height: 250px;
        width: 210px;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        justify-self: end;
    }


`


export const FooterHodape = styled.footer`

    background-color: black;
    width: 100%;
    min-height: 5vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

`
    
