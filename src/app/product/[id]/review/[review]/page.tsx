import { notFound } from "next/navigation";
import { Metadata } from "next";



type Iprops = {
    params : Promise<{id : number , review : string }>;
};

// Dianamic Rout Meta Data 

export const generateMetadata = async ({params} : Iprops) : Promise<Metadata> => {
const {id , review} = await params ;
return {
    title : `id is ${id} and review is ${review}`,
}
}

export default async function ReviewPage({params} : Iprops) {
    const {id , review} = await params;

    if (id > 1000 || parseInt(review) > 1000){
    notFound();
    }

    return (
        // Nested Diamanic route  
        <h1>Reviews {review} and Id is {id}</h1>
    );
}

