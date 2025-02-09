"use client"
import { usePathname } from "next/navigation";
export default function NotFound(){
    // When page is not found so we make this page for not found page handling 

const pathname = usePathname();
const id = pathname.split("/")[2];
const review = pathname.split("/")[4];

    return (
    <div>
    <h1>Not Found</h1>
    <p>Review {review } and Id is {id} is not Found</p>
    </div>
    );
}