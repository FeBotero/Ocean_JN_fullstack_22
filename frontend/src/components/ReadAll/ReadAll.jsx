import { useState } from "react"
import { Api } from "../../api/api"
import ItemCard from "../ItemCard/ItemCard"
import carregando from "../../assets/carregando.gif"
import "./ReadAll.css"
import { useEffect } from "react"
 function ReadAll(){
   

        // Desconstrução de array
            const [itens,setItens] = useState()

            async function realizarRequisicao(){
            
            
            const readAllUrl = Api.itens.readAll();
            
            const response = await Api.buildApiGetRequest(readAllUrl);
            
            const resultado = await response.json();
            
            setItens(resultado);
            
            }
            useEffect(function(){
                realizarRequisicao();
            },[])
            
            // Esse efeito depende de uma lista vazia, assimo useEffect execulta apenas uma vez

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