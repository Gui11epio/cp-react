import Aparelhos from "./components/Aparelhos";
import Cabecalho from "./components/Cabecalho"
import Propaganda from "./components/Propaganda";
import Rodape from "./components/Rodape"
import Servicos from "./components/Servicos";

import { listadadosAparelhos } from "./tipagem";
import { servicosType } from "./tipagem";
import { listaLojaType } from "./tipagem";

function App() {

  const listaAparelhos: listadadosAparelhos[] = [
    {nome:'Iphone',descricao:'',preco:5000,img:''},
    {nome:'Samsung',descricao:'',preco:2200,img:''},
    {nome:'Sony',descricao:'',preco:3200,img:''},
    {nome:'Xiaomi',descricao:'',preco:2100,img:''},
    {nome:'Motorolla',descricao:'',preco:1500,img:''}
  ];

  const servicos: servicosType[] = [
    {nome:'Teleshop',descricao:'',preco:39},  
  ];

  const listaLoja:listaLojaType[] = [
    {nome:'Teleshop',redes:''},
    {nome:'Amazon',redes:''},
    {nome:'Mercado Livre',redes:''}
  ];

  return (
    <>
      <Cabecalho/>
      <Propaganda/>
      {listaAparelhos.map((aparelho, i)=>(<Aparelhos key={i} nome={aparelho.nome} descricao={aparelho.descricao} preco={aparelho.preco} img={aparelho.img}/>))}
      {servicos.map((servicos, i)=>(<Servicos key={i} nome={servicos.nome} descricao={servicos.descricao} preco={servicos.preco}/>))}
      {listaLoja.map((lojas, i)=>(<Rodape key={i} nome={lojas.nome} redes={lojas.redes}/>))}
    </>
  )
}

export default App
