import "./ItemCard.css"
const url = "https://ocean-jn-fullstack-22fb.onrender.com/Itens"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { Api } from "../../api/api";
import {useNavigate} from "react-router-dom"


function ItemCard(props){
    const item = props.item
    if(!confirm("Tem certeza que deseja excluir esse item?")){
        return;
    }

    const navigate = useNavigate()
    
    async function excluirItem(){
        
        const deleteUrl = Api.itens.delete(item._id);
        const response = await Api.buildApiDeleteRequest(deleteUrl);
        const body = await response.json()

        if(response.status ===200){
            alert(body.message);
            navigate(0)
        }else{
            alert("Ocorreu algum erro, tente novamente.")
        }
    }
    
    
    return(
        <div className="ItemCard">
            <FontAwesomeIcon onClick={excluirItem()} className="icon-delete"icon={faTrashCan} />
            

            <h1>{item.nome}</h1>
            <img src={item.imgUrl} alt={"Imagem do " + item.nome} width="200px"max-height="200px" />
        </div>
    )
}
export default ItemCard