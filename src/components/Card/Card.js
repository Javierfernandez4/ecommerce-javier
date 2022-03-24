import React, { useState } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'


export default function Card({data}) { 
    const {precio, talle, titulo, stock} = data
    const [ count, setCount ] = useState(1)
 
    const addStock = () => {
        setCount(count + 1 )
    }
    const removeStock = () => {
        setCount(count - 1 )
    }
    return(
        <div ClassName="card-item">
            <h2>{titulo}</h2>
            <p>Precio : $ {precio}</p>
            <p>Talle :  {talle}</p>
            <ItemCount stock={stock}></ItemCount>
           
        </div>
    )
}
