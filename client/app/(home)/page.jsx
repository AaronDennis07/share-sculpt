import PostCards from "../components/PostCards"
export default function Home() {
  return (
    <main className=" ml-16">
      {/* <article className="flex items-center  w-7/12    border-[1px] rounded-xl border-slate-900 p-4 mt-12">
        <div>
          <div id="head" className="flex gap-3">
            <Image className="w-12 h-12 rounded-full" src="/profile.jpg" height={16 * 3} width={16 * 3} alt="user photo" />
            <p className="text-md my-auto">Aaron Dennis</p>
            <p className="text-sm text-slate-500 my-auto">Aug 26 2023</p>
          </div>
          <div id="content" className="mt-4">
            <h2 className="font-bold text-2xl ">Title of the blog</h2>

            <p className="font-serif  text-base  mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque molestiae commodi! Cumque necessitatibus cupiditate enim  molestiae commodi! enimqui...
            </p>
          </div>
          <div>
          <p className="pl-2 text-xs font-medium mt-10">Backend Development</p>
          </div>
        </div>
        <Image className="w-36 h-36 " src='/cover.jpeg' height={150} width={150} />
      </article>
      <article className="flex items-center  w-7/12    border-[1px] rounded-xl border-slate-900 p-4 mt-12">
        <div>
          <div id="head" className="flex gap-3">
            <Image className="w-12 h-12 rounded-full" src="/profile.jpg" height={16 * 3} width={16 * 3} alt="user photo" />
            <p className="text-md my-auto">Aaron Dennis</p>
            <p className="text-sm text-slate-500 my-auto">Aug 26 2023</p>
          </div>
          <div id="content" className="mt-4">
            <h2 className="font-bold text-2xl ">Title of the blog</h2>

            <p className="font-serif  text-base  mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque molestiae commodi! Cumque necessitatibus cupiditate enim  molestiae commodi! enimqui...
            </p>
          </div>
          <div>
          <p className="pl-2 text-xs font-medium mt-10">Backend Development</p>
          </div>
        </div>
        <Image className="w-36 h-36 " src='/cover.jpeg' height={150} width={150} />
      </article>
      <article className="flex items-center  w-7/12    border-[1px] rounded-xl border-slate-900 p-4 mt-12">
        <div>
          <div id="head" className="flex gap-3">
            <Image className="w-12 h-12 rounded-full" src="/profile.jpg" height={16 * 3} width={16 * 3} alt="user photo" />
            <p className="text-md my-auto">Aaron Dennis</p>
            <p className="text-sm text-slate-500 my-auto">Aug 26 2023</p>
          </div>
          <div id="content" className="mt-4">
            <h2 className="font-bold text-2xl ">Title of the blog</h2>

            <p className="font-serif  text-base  mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque molestiae commodi! Cumque necessitatibus cupiditate enim  molestiae commodi! enimqui...
            </p>
          </div>
          <div>
          <p className="pl-2 text-xs font-medium mt-10">Backend Development</p>
          </div>
        </div>
        <Image className="w-36 h-36 " src='/cover.jpeg' height={150} width={150} />
      </article>
      <article className="flex items-center  w-7/12    border-[1px] rounded-xl border-slate-900 p-4 mt-12">
        <div>
          <div id="head" className="flex gap-3">
            <Image className="w-12 h-12 rounded-full" src="/profile.jpg" height={16 * 3} width={16 * 3} alt="user photo" />
            <p className="text-md my-auto">Aaron Dennis</p>
            <p className="text-sm text-slate-500 my-auto">Aug 26 2023</p>
          </div>
          <div id="content" className="mt-4">
            <h2 className="font-bold text-2xl ">Title of the blog</h2>

            <p className="font-serif  text-base  mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque molestiae commodi! Cumque necessitatibus cupiditate enim  molestiae commodi! enimqui...
            </p>
          </div>
          <div>
          <p className="pl-2 text-xs font-medium mt-10">Backend Development</p>
          </div>
        </div>
        <Image className="w-36 h-36 " src='/cover.jpeg' height={150} width={150} />
      </article>
      <article className="flex items-center  w-7/12    border-[1px] rounded-xl border-slate-900 p-4 mt-12">
        <div>
          <div id="head" className="flex gap-3">
            <Image className="w-12 h-12 rounded-full" src="/profile.jpg" height={16 * 3} width={16 * 3} alt="user photo" />
            <p className="text-md my-auto">Aaron Dennis</p>
            <p className="text-sm text-slate-500 my-auto">Aug 26 2023</p>
          </div>
          <div id="content" className="mt-4">
            <h2 className="font-bold text-2xl ">Title of the blog</h2>

            <p className="font-serif  text-base  mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque molestiae commodi! Cumque necessitatibus cupiditate enim  molestiae commodi! enimqui...
            </p>
          </div>
          <div>
          <p className="pl-2 text-xs font-medium mt-10">Backend Development</p>
          </div>
        </div>
        <Image className="w-36 h-36 " src='/cover.jpeg' height={150} width={150} />
      </article> */}
      <PostCards count={10}/>
    </main>
  )
}
