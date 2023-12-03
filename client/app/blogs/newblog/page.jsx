
import NewBlog from "@/app/components/NewBlog";
import RequireAuth from "@/app/components/RequireAuth";
import { Suspense } from "react";

export default function Page() {

    return <div>
        <RequireAuth>
        <Suspense fallback={<div>Loading</div>}>
            <NewBlog />
        </Suspense>
        </RequireAuth>
    </div>
}
