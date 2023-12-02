
import NewBlog from "@/app/components/NewBlog";
import RequireAuth from "@/app/components/RequireAuth";

export default function Page() {

    return <div>
        <RequireAuth>
            <NewBlog />
        </RequireAuth>
    </div>
}
