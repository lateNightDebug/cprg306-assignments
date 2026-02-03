import Link from "next/link";
import NewItem from "./new-item";

export default function week4(){
    return(
        <div>
            <NewItem/>
            <div>
                <Link className= "flex justify-center" href="/"><u>Return Home</u></Link>
            </div>
        </div>
    )
}