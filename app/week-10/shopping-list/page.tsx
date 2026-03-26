"use client"
import Link from "next/link";
import ItemList from "./item-list"
import NewItem from "./new-item";
import {getItems, addItem} from "../_services/shopping-list-service";
import { SetStateAction, useEffect, useState } from "react";
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

export default function week10(){
    const[items, setitems] = useState<Item[]>([]); 
    const {user} = useUserAuth();
    
    const updateList = (item: Item)=>{
        console.log("item: ", item)
        setitems([...items, item])

    }
    const router= useRouter();
    useEffect(()=>{
    if(!user){
       router.push("/week-10")
    }},[])
    
    useEffect(()=>{
        if(user){
            console.log("load items called")
            loadItems(user, {setitems})}},
    [user,])

    return(
        <div className="p-4 max-w-xl mx-auto">
            <NewItem updatelist={updateList} addItem={addItem} user={user} />
            <h2 className = "text-2xl font-bold mb-3">Shopping List</h2> 
            <ul className = "space-y-2">
                <ItemList items={items}/>
            </ul>
            <MealIdeas/>
            <Link className= "flex justify-center" href="/"><u>Return Home</u></Link>
            
        </div>
    )
}

const loadItems = async (user: User, {setitems}: any ) => { 
  if (!user || !user.uid) {
    console.error("User or User ID is missing.");
    return;
  }
  
  try {
    // Awaits the result of getItems using user.uid as the userId
    const shoppingListItems = await getItems(user.uid); 
    console.log("Shopping items",shoppingListItems)
    // Sets the items state to the fetched items
    setitems(shoppingListItems); 

  } catch (error) {
    // Error handling with a try...catch block is a best practice
    console.error("Failed to load shopping list items:", error);
  }
};