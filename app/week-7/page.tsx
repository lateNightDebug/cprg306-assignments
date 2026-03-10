"use client"
import Link from "next/link";
import ItemList from "./item-list"
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import Item from "./item";
import MealIdeas from "./meal-ideas";

type Item = {
    id: string;
    name: string;
    quantity: number;
    category: string;

}

export default function week6(){
    const[items, setitems] = useState<Item[]>(itemsData); 

    const updateList = (item: Item)=>{
        console.log("item: ", item)
        setitems([...items, item])

    }


    return(
        <div className="p-4 max-w-xl mx-auto">
            <NewItem items={items} updatelist={updateList}  />
            <h2 className = "text-2xl font-bold mb-3">Shopping List</h2> 
            <ul className = "space-y-2">
                <ItemList items={items}/>
            </ul>
            <MealIdeas/>
            <Link className= "flex justify-center" href="/"><u>Return Home</u></Link>
            
        </div>
    )
}