 import Card  from '../Card/Card';
 
 
 const ListProducts = () => {
    return(
        <div className="container-cards">
            <Card titulo='Remera' talle='S' precio={200}></Card>
            <Card titulo='Pantalon' talle='M' precio={500}></Card>
            <Card titulo='Gorra' talle='S' precio={100}></Card>
            <Card titulo='Musculosa' talle='L' precio={150}></Card>
            <Card titulo='Calsoncillo' talle='L' precio={80}></Card>
        
        </div>
    ) 
}


export default ListProducts;