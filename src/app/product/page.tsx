import Link from "next/link";
export default function Product() {
    const productID = 100;
    return (
        // senario 2
        <>
        <h1>Product Page ...</h1>
        <h1><Link href="/product/1" >Product 1</Link></h1>
        <h1><Link href="/product/2" >Product 2</Link></h1>
        <h1><Link href="/product/3" >Product 3</Link></h1>
        <h1><Link href="/product/4" replace>Product 4 replace </Link></h1> {/* replace is used to replace the HOme page */}   
        <h1><Link href={`/product/${productID}`} >Product {productID}</Link></h1>
        </>
    );
}