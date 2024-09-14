import { listadadosAparelhos } from "../tipagem"


export default function Aparelhos({nome, descricao, preco, img}:listadadosAparelhos) {
    

    return(
        <section>
            <h1>{nome} <br/>{descricao} <br/>{preco} <br/>{img} </h1>
        </section>
    )
}










