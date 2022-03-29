 import { useEffect, useState } from 'react';
import Card  from '../Card/Card';
 
 
 const ListProducts = ({children}) => {
    const mockProducts = [{
                id:1,
                titulo: 'Remera',
                talle: 'S',
                precio: 2300,
                stock: 5,
                image: 'remera1.JPG'
            },
            {
                id:2,
                titulo: 'Pantalon',
                talle: 'S',
                precio: 4500,
                stock: 5,
                image:'remera1.JPG'
            }]

    
    const [products, setProducts] = useState([])
    
    const getProducts= () => {
        return new Promise((resolve, reject) => {
        return resolve(mockProducts) 
     })   
    }
    useEffect(() => {
        getProducts().then( (products)=> {
            setProducts(products)

        })
    }, [])

    return(
        <div className="container-cards">
            <h2>Productos de temporada</h2>
            {products.map((product) => {
                const{id}=product
                return(
                   <Card data={product} key={id}></Card>
                )
            })}
        </div>
    ) 
}


export default ListProducts;