import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"


function App() {

  const listaAparelhos:{nome:string,descricao:string,preco:number,img:string}[] = [
    {nome:'Iphone',descricao:'',preco:5000,img:''},
    {nome:'Samsung',descricao:'',preco:2200,img:''},
    {nome:'Sony',descricao:'',preco:3200,img:''},
    {nome:'Xiaomi',descricao:'',preco:2100,img:''},
    {nome:'Motorolla',descricao:'',preco:1500,img:''}
  ];

  const servicos:{nome:string,descricao:string,preco:number}[] = [
    {nome:'Teleshop',descricao:'',preco:39},  
  ];

  const listaLoja:{nome:string,redes:string}[] = [
    {nome:'Teleshop',redes:''},
    {nome:'Amazon',redes:''},
    {nome:'Mercado Livre',redes:''}
  ];

  return (
    <>
      <Cabecalho/>
      <Rodape/>
    </>
  )
}

export default App
