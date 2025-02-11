"use client";

import { useRouter } from "next/navigation";
export default function Orderpage(){
    const router = useRouter();
const handler = () =>{
    console.log("Order Sibmitted");
router.push("/");
}
    return(
        <div>
            <button onClick={handler}>Order</button>
        </div>
    )
}