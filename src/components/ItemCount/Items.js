import React from "react";
import './items.css';
import '../ItemCount/ItemCount';
import { ListItemSecondaryAction } from "@mui/material";

function Item({data}) {
    const {url, precio, stock, descripcion}= data
    return(
        <div className="cardItem">
            <img srl={url} className="cardItem__img" alt="foto de remera"></img>
            <p>Precio : $ {precio}</p>
            <p>Descripcion : $ {descripcion}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}
export default Items;