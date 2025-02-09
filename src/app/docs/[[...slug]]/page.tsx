export default async function SimplePage({params} : {params : Promise<{slug : string[] }>}){

// docs / [[...slug]] / page.tsx --------------------- CATCH ALL SEGMENTS 
 
    const {slug } = await params;

if (slug?.length === 2){
return (
    <div>
        <h1>lenght 1 is {slug[0]} and lenght 2 is {slug[1]}</h1>
    </div>
);
}

if (slug?.length === 1){
    return <h1>lenght 1 is {slug[0]}</h1>
}
    return (
        <h1>Simple Page</h1>
    );
}