import { promises } from "dns";

export default async function ProductPage({params} : {params : Promise<{id : string}>}) {
    const productId = (await params).id
    return ( 
        <div>
            {/* diamanic Routs */}
        <h1>Product Details Page ...</h1>
        <h2>Product Details {productId} </h2>
        </div>       
    );    
}