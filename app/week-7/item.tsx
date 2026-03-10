import { useState } from "react"
import MealIdeas from "./meal-ideas"

type ItemProp={
    id: string
    name:string
    quantity:number
    category:string
    capitalizer?: (str:string)=>string
}

export default function Item({id,name,capitalizer, quantity, category}:ItemProp,){
   const handleSelect = (item: string) => {
    console.log("selected item: ", item);
    
  };

    return(
        
        <li className= "border p-2 rounded mb-2 mt-2"
        onClick={() => handleSelect(name)}>
           <p className = "font-medium">{`${name}`}</p> 
           <p>{`Quantity: ${quantity}`}</p>
           <p>{`Category: ${capitalizer ? capitalizer(category) :category}`}</p>
           
        </li>
    )
}