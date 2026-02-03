import Link from "next/link";
import ItemList from "./item-list"

export default function week3(){
    return(
        <div className="p-4 max-w-xl mx-auto">
            <h2 className = "text-2xl font-bold mb-3">Shopping List</h2> 
            <ul className = "space-y-2">
                <ItemList/>
            </ul>
            <Link className= "flex justify-center" href="/"><u>Return Home</u></Link>
        </div>
    )
}