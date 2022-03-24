 import Card  from '../Card/Card';
 
 
 const ListProducts = ({children}) => {
    let dataProduct = {
        titulo: 'Remera',
        talle: 'S',
        precio: 2300,
        stock: 5,
    } 
    
    return(
        <div className="container-cards">
            <h2>{children}</h2>

            <Card data= {dataProduct}></Card>
            {/*<Card titulo='Pantalon' talle='M' precio={500}></Card>
            <Card titulo='Gorra' talle='S' precio={100}></Card>
            <Card titulo='Musculosa' talle='L' precio={150}></Card>
    <Card titulo='Calsoncillo' talle='L' precio={80}></Card>*/}
        
        </div>
    ) 
}


export default ListProducts;