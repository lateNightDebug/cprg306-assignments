"use client"
import Link from "next/link";
import ItemList from "./item-list"
import NewItem from "./new-item";
import itemsData from "../shopping-list/items.json";
import { useEffect, useState } from "react";
import Item from "./item";
import MealIdeas from "./meal-ideas";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

type Item = {
    id: string;
    name: string;
    quantity: number;
    category: string;

}

export default function week6(){
    const[items, setitems] = useState<Item[]>(itemsData); 
    const {user} = useUserAuth();
    const updateList = (item: Item)=>{
        console.log("item: ", item)
        setitems([...items, item])

    }
    const router= useRouter();
    useEffect(()=>{
    if(!user){
       router.push("/week-8")
    }},[])


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