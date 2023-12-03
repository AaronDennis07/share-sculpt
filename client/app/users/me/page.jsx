
import Profile from "@/app/components/Profile";
import RequireAuth from "@/app/components/RequireAuth";

export default async function Page(){
   
    return (
        <RequireAuth>
            <Profile/>
        </RequireAuth>
    )
}