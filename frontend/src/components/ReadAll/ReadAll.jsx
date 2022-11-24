import { useState } from "react"
import { Api } from "../../api/api"
import ItemCard from "../ItemCard/ItemCard"
import carregando from "../../assets/carregando.gif"
import "./ReadAll.css"
 function ReadAll(){
    // const itens = [
    //     {
    //         _id:"123",
    //         nome:"Cafe",
    //         imageUrl:"https://picsum.photos/200/200"
    //         },
    //         {
    //         _id:"233",
    //         nome:"bala",
    //         imageUrl:"https://picsum.photos/200/300"
    //         }
   
    //     ]

        // Desconstrução de array
            const [itens,setItens] = useState()

            async function realizarRequisicao(){
            
            
            const readAllUrl = Api.itens.readAll();
            
            const response = await Api.buildApiGetRequest(readAllUrl);
            
            const resultado = await response.json();
            
            setItens(resultado);
            
            }
            
            realizarRequisicao();

            if(itens ===undefined){
                return <div><img src={carregando} alt="" /></div>
            }
            

    return(
        <div className="ReadAll">
            
            {itens.map(function (item, index){
                return <ItemCard item={item} key={`item-card-${index}`}/>
            })}
            

        </div>
    )
}

export default ReadAll