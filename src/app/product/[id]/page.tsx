import { Metadata } from "next";

type Props ={
    params : Promise<{id : string}>
}

export const generateMetadata = async({ params }: Props) : Promise<Metadata> =>{
const {id}  = await params;
return {
    title : `Product  ${id}`,
}
}

export default async function ProductPage({params} : Props) {
    const productId = (await params).id
    return ( 
        <div>
            {/* diamanic Routs */}
        <h1>Product Details Page ...</h1>
        <h2>Product Details {productId} </h2>
        </div>       
    );    
}