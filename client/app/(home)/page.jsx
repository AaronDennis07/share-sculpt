import {getAllBlogs} from '@/app/actions'
import PostCards from "../components/PostCards"
import { revalidatePath } from 'next/cache'
export default async function Home() {

  const {blogs} = await getAllBlogs()

  console.log("hit");
  return (
    <main className=" ml-16 ">
      
      <PostCards  blogs={blogs}/>
    </main>
  )
}
