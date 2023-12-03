import { getAllBlogs } from '@/app/actions'
import PostCards from "../components/PostCards"
import { revalidatePath } from 'next/cache'
import Loading from '../components/Loading'
export default async function Home() {

  const { blogs } = await getAllBlogs()


  return (
    <main className=" ml-16 ">
      
      <PostCards blogs={blogs} />
    </main>
  )
}
