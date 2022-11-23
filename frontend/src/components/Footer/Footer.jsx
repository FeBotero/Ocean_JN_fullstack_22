import "./Footer.css"

const data = new Date
const year = data.getFullYear()
function Footer(){
    return(
        <div className="Footer">
            <p>Todos os direitos reservados {year} 
            ®</p>
        </div>
    )
}

export default Footer