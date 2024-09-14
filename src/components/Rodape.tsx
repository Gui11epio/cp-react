import { FooterHodape } from "../styled";
import { listaLojaType } from "../tipagem";

export default function Rodape({nome, redes}:listaLojaType){

    return(
        <FooterHodape>
            <h1>{nome}{redes}</h1>
        </FooterHodape>
    )
}