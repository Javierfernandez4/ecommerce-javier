import './Card.css'
export default function Card(props) { 
    const {precio, talle, titulo} = props

    console.log("Precio", precio)
    console.log("Talle", talle)
    console.log("Titulo", titulo)
    return(
        <div ClassName="card-item">
            <h2>{titulo}</h2>
            <p>Precio : $ {precio}</p>
            <p>Talle :  {talle}</p>
            <button>Comprar</button>
        </div>
    )
}
