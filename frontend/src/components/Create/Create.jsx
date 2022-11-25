import "./Create.css"
import { Api } from "../../api/api"
import { useNavigate } from "react-router-dom";

function Create(){
    const navigate = useNavigate();


    async function handleSubmit(event){
        event.preventDefault();
   
    const nome = event.target.nome.value;
    const imgUrl = event.target.imgUrl.value;

    const payload ={
        nome,
        imgUrl
    }
    const createUrl = Api.itens.create();

    const response = await Api.buildApiPostRequest(createUrl,payload)

    const body = await response.json();
    
    if(response.status ===200){
        alert(body.message)
        navigate("/")
    }else{
        alert("Ocorreu algum erro, tente novamente.")
    }

    }
    return(
        <div className="Create">
            <form onSubmit={handleSubmit}>
                <div>
                
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" />
                </div>
                <div>
                <label htmlFor="image">Imagem URL: </label>
                <input type="text" name="image" id="imgUrl"/>
                </div>
                <div>
                <input type="submit" value="Adicionar"/>
                </div>
                
            </form>
        </div>
    )
}

export default Create