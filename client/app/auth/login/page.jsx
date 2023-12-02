
import { getCookie } from "@/app/actions"
import Login from "@/app/components/Login"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"


export default async function Page(){
    const registered = getCookie('registered')
    
    return <Login registered={registered}/>
}