import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import React, { useEffect } from "react";
import ItemCount from "./ItemCount";



useEffect(()=>{
    getProductos().then(dataproductos)=>{
        setProductos(dataproductos)
    }).finally(()=>{
        console.log("termino la llamada correctamente")
    })
},[])

return(
    <div className="cardsContainer">
        {productos.map((producto)=>{
            return(
                <Item data={producto} key={producto.id}/>
            )
        })}

    </div>

) 
}
export default ItemsList;