import { CorpoPrincipal } from "../styled";
import { SecPropagandas } from "../styled";
import celular from '../assets/smartphone.png'
import tablet from '../assets/tablet.jpg'

export default function Propagandas(){

    return(
        <CorpoPrincipal>
            <SecPropagandas>
                <h2>MELHORES OFERTAS!!!</h2>
                <div id="aparelhos">
                    <img src= {celular}alt="" />
                    <img src= {tablet} alt="" />
                    <h1>10% desconto</h1>
                </div>
                
            </SecPropagandas>
        </CorpoPrincipal>
    )
}