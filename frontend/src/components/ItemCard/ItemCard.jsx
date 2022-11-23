import "./ItemCard.css"
const url = "https://ocean-jn-fullstack-22fb.onrender.com/Itens"

function ItemCard(props){
    const item = props.item
    console.log(item.nome)
    return(
        <div className="ItemCard">
            <h1>{item.nome}</h1>
            <img src={item.imageUrl} alt={"Imagem do " + item.nome} />
        </div>
    )
}
export default ItemCard