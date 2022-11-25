import brand from "../../assets/brand.svg"
import "./Header.css"
import {Link} from "react-router-dom"


function Header(){
    return(
        <div className="Header">
            <Link href="/"><img src={brand} alt="Logo Zap" /></Link>
            
            <Link href="/create">Adicionar</Link>
            <Link href="/">Listar</Link>
            
        </div>
    )
}

export default Header