"use client"
import { useState } from "react";
export default function CounterPage(){
    const [count , setcount] = useState(1);
    return(
        <div>
            <h1>Count is {count}</h1>
            <button className="bg-slate-600 py-2 px-4 text-white" onClick={() => setcount(count + 1)}>
                Increament
            </button>
        </div>
    );
}