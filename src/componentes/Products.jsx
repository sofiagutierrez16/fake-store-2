export const Products = ({products}) => {
    
    return <> 
        <h1>Nombre del Producto: {products.title}</h1>
        <p>Precio: {products.price}</p>
        <img src={products.image} alt="" />
    
    
    </>
    

}