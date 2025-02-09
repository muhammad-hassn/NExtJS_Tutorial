import { notFound } from "next/navigation";

export default async function ReviewPage({params} : {params : Promise<{id : number , review : string}>}) {
    const {id , review} = await params;

    if (id > 1000 || parseInt(review) > 1000){
    notFound();
    }

    return (
        // Nested Diamanic route  
        <h1>Reviews {review} and Id is {id}</h1>
    );
}

