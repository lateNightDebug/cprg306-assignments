import MealIdeas from "./meal-ideas"

type ItemProp={
    id: string
    name:string
    quantity:number
    category:string
    capitalizer?: (str:string)=>string
    Selected:boolean
}

export default function Item({id,name,capitalizer, quantity, category}:ItemProp,){
    const onSelect=() => {
        
    }

    return(
        
        <li className= "border p-2 rounded mb-2 mt-2"
        onClick={onSelect}>
           <p className = "font-medium">{`${name}`}</p> 
           <p>{`Quantity: ${quantity}`}</p>
           <p>{`Category: ${capitalizer ? capitalizer(category) :category}`}</p>
           
        </li>
    )
}