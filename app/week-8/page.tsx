"use client"
import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
 

// await gitHubSignIn();

// await firebaseSignOut();

export default function week8(){
    const [isLoggedin, setIsLoggedIn] = useState<boolean>(false)
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const router = useRouter()

useEffect(()=>{
    if(user){
setIsLoggedIn(true)
}else{

}},[user])


const logHandler = async() => {
    await gitHubSignIn();
}
const logOutHandler = async() => {
    await firebaseSignOut();
    setIsLoggedIn(false)
}


    return(
        <div>
            <div className="flex">
            <button onClick={logHandler} className=" col-start-1 border-2 p-3 mb-2">Login with Github</button>
            <button onClick={logOutHandler} className=" col-start-1 border-2 p-3 mb-2">Log out</button>
            </div>
            {isLoggedin && <p>Welcome, {user?user.displayName:""} ({user?user.email:""})</p>}
            <Link href="./week-8/shopping-list">your Shopping List</Link>

            <Link className= "flex justify-center" href="/"><u>Return Home</u></Link>


           

        </div>
    );

}

function Async() {
    throw new Error("Function not implemented.");
}
