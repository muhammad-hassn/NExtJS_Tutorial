import React from "react";

export default function LayoutPage(
    {children} : {children : React.ReactNode}
){
    // it's is Layout page of [id]/page.tsx file 
    // nested route layout page
    return (
        <div>
            {children}
            <h1>Layout Page for demo .</h1>
        </div>
    );
}