import "./ItemCard.css"
const url = "https://ocean-jn-fullstack-22fb.onrender.com/Itens"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { Api } from "../../api/api";
import {useNavigate} from "react-router-dom"


function ItemCard(props){
    const itens = props.itemCard
      

    const navigate = useNavigate()
    
    async function excluirItem(){
        if(!confirm("Tem certeza que deseja excluir esse item?")){
            return;
        } 
        
        const deleteUrl = Api.itens.delete(itens._id);
        const response = await Api.buildApiDeleteRequest(deleteUrl);
        const body = await response.json();

        if(response.status ===200){
            alert(body.message);
            navigate(0)
        }else{
            alert("Ocorreu algum erro, tente novamente.")
        }
    }
    
    
    return(
        <div className="ItemCard">
            <FontAwesomeIcon onClick={excluirItem} className="icon-delete"icon={faTrashCan} />
            

            <h1>{itens.nome}</h1>
            <img src={itens.imgUrl} alt={"Imagem do " + itens.nome} width="200px"max-height="200px" />
        </div>
    )
}
export default ItemCard