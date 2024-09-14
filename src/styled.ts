import styled from "styled-components";

export const HeaderCabec = styled.header`
    border: 2px solid black;
    background-color: blue;
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

export const FooterHodape = styled.footer`

    background-color: blue;
    width: 100%;
    height: 100px;
    min-height: 5vh;
    padding: 20px;
    display: flex;
    align-self: flex-end;

    h1{
        font-size: 20px;
    }

`
    
export const SectionProp = styled.section`
    border: 2px solid black;
    height: 254px;
    
    img{
        height: 250px;
        width: 100%;
    }
`