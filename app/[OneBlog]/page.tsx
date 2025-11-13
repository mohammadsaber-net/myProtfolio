import { blog } from "@/data/data"
import Link from "next/link"

export default async function Page({params}:{ params: { OneBlog: number }}) {
  const {OneBlog} =await params
  const Blogs=blog.filter(item=>{
    return item.id=== +OneBlog
  })
  const Body=Blogs[0].body
  return (
    <div className="m-4 mt-6 min-h-screen relative">
      <Link href={"/#Blog"} className="absolute top-2 transition hover:bg-blue-800 right-4 p-2 rounded-md text-white bg-blue-600">
      back to main blogs
      </Link>
      <div>
        <img src={Blogs[0].image} className="max-w-80 max-h-80" alt="" />
      <div className="text-gray-500 mt-2 mb-4 justify-center text-sm flex gap-6">
        <span>written by: <span className="text-cyan-500">mohammad saber</span></span>
        <span className="text-xs">13 nov 2025</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {Blogs[0].keyWords.map((Icon,idx)=>(
          <div key={idx} className="p-1 items-center rounded-sm dark:bg-[#0d0d1f] flex gap-1 bg-indigo-400 text-white">
            <Icon.Icon className=" size-5"/>
              <span>{Icon.name}</span>
            </div>
        ))}
      </div>
      <div className="text-xl mt-1 my-4 border-b border-gray-300 dark:text-white text-gray-700 sm:text-2xl capitalize text-center">
        {Blogs[0].title}
      </div>
      <div className="max-w-[80%]">
          <Body />
      </div>
        </div>
    </div>
  )
}
