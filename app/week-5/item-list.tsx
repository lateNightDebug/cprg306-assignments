"use client";
import Item from "./item";
import {useState} from "react"
import items from "./items.json"


export default function ItemList() {
    const[sortBy, setSortBy] = useState<string>("name");

    var itemSort = [];
    for (let i=0; i < items.length; i++){
        itemSort.push(
            <Item
                id={items[i].id}
                name={items[i].name}
                quantity={items[i].quantity}
                category={items[i].category}
            />)
            }

    const sortName = () =>{
        setSortBy("name")
    }
    const sortCat = () =>{
        setSortBy("category")
    }

    if (sortBy == "name"){
        items.sort(function(a, b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
}); 
    }
    else if (sortBy == "category")
        items.sort(function(a, b){
        let x = a.category.toLowerCase();
        let y = b.category.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
        });

return (
<div>
    <div className="grid grid-flow-row grid-cols-3 gap-4 mb-4 border-b-4 justify-center ">
        <h2 className=" row-span-1 col-start-2 justify-self-center ">Sort by</h2>
        <button id="name"onClick={sortName} className=" col-start-1 border-2 p-3 mb-2">Name</button>
        <button className="col-start-2 border-2 p-3 mb-2">reduce</button>
        <button id="Cat"onClick={sortCat} className=" col-start-3 border-2 p-3 mb-2">Category</button> 
    </div>
    {/* <ul>
    <Item name={item1.name}
    quantity={item1.quantity}
    category={item1.category}/>

    </ul>    */}

    {items.map((i, index)=><div key={index}><Item id = {i.id} name= {i.name} quantity={i.quantity} category={i.category}/></div>)}


</div>
)
}