import {useState} from "react";

type ItemProp={
    id: string
    name:string
    quantity:number
    category:string
    capitalizer?: (str:string)=>string
}

export default function Item({id,name,capitalizer, quantity, category}:ItemProp,){
    return(
        <li className= "border p-2 rounded mb-2 mt-2">
           <p className = "font-medium">{`${name}`}</p> 
           <p>{`Quantity: ${quantity}`}</p>
           <p>{`Category: ${capitalizer ? capitalizer(category) :category}`}</p>
        </li>
    )
}