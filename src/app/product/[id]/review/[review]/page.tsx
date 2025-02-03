export default async function ReviewPage({params} : {params : Promise<{id : number , review : string}>}) {
    const {id , review} = await params
    return (
        // Nested Diamanic route  
        <h1>Reviews {review} and Id is {id}</h1>
    );
}



