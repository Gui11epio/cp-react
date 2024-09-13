import styled from "styled-components";

export const HeaderCabec = styled.header`
    display: grid;
    grid-auto-rows: 150px;
    grid-template-columns: 1fr, 1fr, 1fr;
    grid-template-areas: 
    'logo  h1  icone'
    ;

    #logo{ grid-area: logo;}
    h1{ grid-area: h1;}
    #icone{ grid-area: icone;}
    

    #logo{
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: left;
    }

    h1{
        text-align: center;
        align-self: center;
    }

    #icone{
        width: 70px;
        height: 70px;
        justify-self: right;
        align-self: center;
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
    height: 100px;
    min-height: 5vh;
    padding: 20px;
    display: flex;
    align-self: flex-end;

`
    
