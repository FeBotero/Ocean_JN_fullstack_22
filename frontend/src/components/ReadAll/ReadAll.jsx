import { Api } from "../../api/api"
import ItemCard from "../ItemCard/ItemCard"
import "./ReadAll.css"
function ReadAll(){
    const itens = [
        {
            _id:"123",
            nome:"Cafe",
            imageUrl:"https://picsum.photos/200/200"
            },
            {
            _id:"233",
            nome:"bala",
            imageUrl:"https://picsum.photos/200/300"
            },
            {
            _id:"233",
            nome:"bala",
            imageUrl:"https://picsum.photos/200/300"
            }
            ,
            {
            _id:"233",
            nome:"bala",
            imageUrl:"https://picsum.photos/200/300"
            }
            


    ]
            const readAllUrl = Api.itens.readAll();
            Api.buildApiGetRequest(readAllUrl)


    return(
        <div className="ReadAll">
            
            {itens.map(function (item, index){
                return <ItemCard item={item} key={`item-card-${index}`}/>
            })}
            

        </div>
    )
}

export default ReadAll