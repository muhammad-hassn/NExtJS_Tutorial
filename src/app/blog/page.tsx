
export const metadata = {
    title : {
        absolute : "Blog Page"
    }
}
export default async function Blog() {
    await new Promise((resolve) =>{
        setTimeout(() => {
            resolve("International Delay..")
        }, 2000);
    })
    return (
        // senario 2
        <h1>Blog Page ...</h1>
    );
}