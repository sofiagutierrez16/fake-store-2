export const Products = ({ products, buyProduct }) => {
    
    return <div className="row"> 
        {products.map((element,index) => {
            return <div className="col-4" key={index}>
                <h1>{element.title}</h1>
                <p>{element.price}</p>
                <img src={element.image} height={400} width={300} alt="" />

                <button onClick={()=>{buyProduct(element.id)}}>Comprar</button>
            </div>
        })}
    </div>
    

}