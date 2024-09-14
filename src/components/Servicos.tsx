import { servicosType } from "../tipagem"


export default function Servicos({nome, descricao, preco}:servicosType){
    
    return(
        <section>
            <h1>{nome} <br/>{descricao} <br/> {preco}</h1>
        </section>
    )
}