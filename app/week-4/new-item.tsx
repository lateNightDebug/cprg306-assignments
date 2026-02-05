"use client";
import {useState} from "react";

type item = {
    name:string
    quantity:number
    category:string
}

export default function NewItem() {

    const[name, setName] = useState<string>("");
    const[quantity, setQuantity] = useState<string>("");
    const[category, setCategory] = useState<string>("produce")
    const[nameTouched,setTouched]= useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault(); 
        
        if (!name || name.length<2){
            document.getElementById("error").innerHTML = "name must be longer than 1 character"
        }
        else {
        console.log(name,quantity,category)
        let newItem = {name: name, quantity: quantity, category: category}
        alert(`Item ${newItem.name} quantity: ${newItem.quantity} Category: ${newItem.category} has been added to the shopping list`)

        setName("")
        setQuantity("")
        setCategory("")
        setTouched(false)
        document.getElementById("error").innerHTML = ""
        document.getElementById("submit")?.setAttribute("submit",'disabled');
        }
    };
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
    const quantityHandler= (e: React.ChangeEvent<HTMLInputElement>)=>{
        setQuantity(e.target.value)
    }
    const categoryHandler= (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setCategory(e.target.value)
        
    }
    const handleTouch = () =>{
        if (name=="") {
            setTouched(true);
            document.getElementById("error").innerHTML = "you must enter a name"
        }
        else{
            setTouched(false)
            document.getElementById("submit")?.removeAttribute('disabled');
        }

    }
    
    return(
        <div>
            <h3 className="text-center">Add an item to the shopping list</h3>
            <br></br>
            <div className="flex justify-center">
            <form className="" onSubmit={handleSubmit}>

            <div className="flex-1 mb-2">
            <label> Enter Item Name:</label>
            <input required type="text" name="newName" value={name} onChange={nameHandler} className={`border-2 ${nameTouched==false? 'border-white': 'border-red-600'}`}
            onBlur={handleTouch}/>
            <p 
            className="text-red-500"
            id="error"> </p>
            </div>
            
            <div className="flex-1 mb-2">
            <label>Enter Item quantity:</label>
            <input required type="text" name="newQuantity"  min="1" max="99999" onChange={quantityHandler} className="border ml-2"/>
            </div>
            <div className="flex-1 mb-2">
            <label>Enter category</label>
            <select name="category" className="border ml-5" onChange={categoryHandler}>
                <option value="Produce" className="text-white bg-black hover:bg-blue-950">produce</option>
                <option value="Dairy" className="text-white bg-black">Dairy</option>
                <option value="Bakery" className="text-white bg-black">Bakery</option>
                <option value="Meat" className="text-white bg-black">Meat</option>
                <option value="Frozen Foods" className="text-white bg-black">Frozen Foods</option>
                <option value="Canned Goods" className="text-white bg-black">Canned Goods</option>
                <option value="Dry Goods" className="text-white bg-black">Dry Goods</option>
                <option value="Beverages" className="text-white bg-black">Beverages</option>
                <option value="snacks" className="text-white bg-black">Snacks</option>
                <option value="household" className="text-white bg-black">Household</option>
                <option value="Other" className="text-white bg-black">Other</option>
            </select>
            </div>
            <br></br>

            <div className=" mb-2 justify-content-center">
            <button type="submit" id="submit" className= "bg-green-600 disabled:bg-gray-500 p-2 border rounded-2xl" disabled>add Item</button>
            </div>

            </form>
            </div>
            </div>
    )
}