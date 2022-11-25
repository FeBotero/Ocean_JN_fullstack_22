import brand from "../../assets/brand.svg"
import "./Header.css"


function Header(){
    return(
        <div className="Header">
            <a href="/"><img src={brand} alt="Logo Zap" /></a>
            
            <a href="/create">Adicionar</a>
            <a href="/">Listar</a>
            
        </div>
    )
}

export default Header