import Brand from "../../assets/brand.svg"
import "./Header.css"
import { Link } from "react-router-dom";


function Header(){
    return(
        <div className="Header">
            <Link to="/">
        <img src={Brand} width={32} height={32} alt="Samsung Ocean Logo" />
      </Link>

      <Link to="/">Listar</Link>

      <Link to="/create">Adicionar</Link>
            
        </div>
    )
}

export default Header