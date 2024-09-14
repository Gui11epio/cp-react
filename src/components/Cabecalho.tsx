import logo from '../assets/logo.png'
import icone from '../assets/icone.png'
import { HeaderCabec} from '../styled'

export default function Cabecalho(){

    return(
        <HeaderCabec>
            <img src= {logo} id='logo' />
            
            <h1>SMART SHOP</h1>

            <img src= {icone} id='icone' />

        </HeaderCabec>
    )
}