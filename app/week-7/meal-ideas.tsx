"use client"
import { useState, useEffect,} from "react"
import Image from "next/image";
type ingredientProp={
ingredient: String,
};
type Meal={
name:String,
url: String,
mealId: string,
}
type mealList ={
    meals: Meal[],
}
async function fetchMealIdeas(input:String){
let data:any;
let mealList: Meal[] = [];

    const callApi = async () =>{
        try{
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`);
        data = await response.json();
        
        console.log("API Response: ", data)
        } catch (error) {
            console.error("Error calling API", error);
        }
       data.meals.forEach((i:any) => {
        let temp: Meal = {
            name : i.strMeal,
            url: i.strMealThumb,
            mealId: i.idMeal
        }
        mealList.push(temp)
});
console.log("its the list! ",mealList)
    };
    await callApi();
    return(mealList)
;
    
}


export default function MealIdeas() {
    const[meals, setMeals] = useState<any[]>([]);
    const[input,setInput] = useState("")

    useEffect(()=>{console.log("meals: ", meals)},[meals])

     useEffect(()=>{console.log()},[input])

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
    const getMeals = async () =>{
      const temp =  await fetchMealIdeas(input)
     
        setMeals(temp)
        console.log(meals)

    }
    return(
        <div>
            <input 
            type = "text"
            placeholder="Enter ingredient"
            className="border-black rounded-md p-2"
            value={input}
            onChange={onChangeText}
            />
            <button onClick={getMeals}>Call Test API</button>
            <h3>{`Here are some meals you can make with ${input}`}</h3>
            {meals.map((i:Meal, index:any)=>
            <div key={index}>
                <div>
                    <li className= "border p-2 rounded mb-2 mt-2">
                        <p className = "font-medium">{`${i.name}`}</p> 
                        <p>{`meal ID: ${i.mealId}`}</p>
                         {/* <Image src={`${i.url}`} width={100} height={200} alt={"Photo of this meal!"}/>  */}
                    </li>
                </div>
            </div>)}
            
        </div>
    );


}