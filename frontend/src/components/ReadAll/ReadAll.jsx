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
            console.log(itens)
            
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
                return <ItemCard itemCard={item} key={`item-card-${index}`}/>
            })}
            {console.log(itens)}

        </div>
    )
}

export default ReadAll