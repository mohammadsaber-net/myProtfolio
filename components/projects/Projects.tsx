"use client"
import { projects } from "@/data/data";
import { Link2 } from "lucide-react";
import Link from 'next/link'
import { useState } from "react";

export default function Projects() {
  return (
    <div id="Projects" className='min-h-screen w-[90%] sm:w-[80%] lg:w-[70%] mx-auto pt-20 pb-10'>
      <h2 data-aos="fade-up" className='text-xl text-center mb-16 whitespace-nowrap sm:text-2xl capitalize md:text-3xl font-bold'>
        A small selection of recent <span className='text-cyan-500 block'>projects</span>
      </h2>

      <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((data) => {
          const icon = data.tools;
          return (
            <div
              key={data.id}
              className="p-5 rounded-lg bg-indigo-200 shadow-md dark:bg-[#0f142ed9] text-white group max-w-[550px]"
              
            >
              <div className="relative overflow-hidden">
                <img src={data.image} className="w-full h-full" alt="" />

                <div
                  className={`absolute top-1/2 left-0  [@media(hover:none)]:opacity-100 z-10 flex flex-col w-full transition-all duration-300 
                    opacity-0 group-hover:opacity-100`}
                >
                  <Link
                    href={data.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-5 bg-cyan-500/50 flex items-center justify-center gap-2 text-white py-2"
                  >
                    <Link2 /> live demo
                  </Link>
                  <Link
                    href={data.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/50 flex items-center justify-center gap-2 text-white py-2"
                  >
                    <Link2 /> code
                  </Link>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl mt-4 mb-2 md:text-2xl xl:text-4xl">
                {data.title}
              </h3>

              <div className="flex gap-2 flex-wrap items-center">
                {icon.map((Icon, index) => (
                  <span key={index} className="flex p-1 rounded-sm dark:bg-[#0d0d1f] items-center bg-indigo-400 gap-1">
                    <Icon />
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// import { projects } from "@/data/data";
// import { Link2 } from "lucide-react";
// import Link from 'next/link'
// export default function Projects() {
//   return (
//     <div id="Projects" className='min-h-screen w-[90%] sm:w-[80%] lg:w-[70%] mx-auto pt-20 pb-10'>
//         <h2 className='text-xl text-center mb-16 whitespace-nowrap sm:text-2xl capitalize md:text-3xl font-bold'>
//             A small selection of recent <span className='text-cyan-500 block'>
//                 projects
//             </span>
//         </h2>
//       <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
//         {projects.map((data)=>{
//             const icon=data.tools
//             return(
//                 <div key={data.id} className="p-5 rounded-lg bg-indigo-200 shadow-md dark:bg-[#0f142ed9] text-white group max-w-[550px]">
//                    <div className="relative overflow-hidden">
//                      <img src={data.image} className="w-full h-full" alt="" />
//                      <div className="absolute capitalize top-1/2 left-0 z-10 flex flex-col w-full">

//                      <Link href={data.demo} target="_blank" rel="noopener noreferrer"
//                       className="mb-10 bg-cyan-500/70 opacity-0
//                       group-hover:opacity-100 flex items-center justify-center gap-2 text-white ">
//                         <Link2 /> live demo
//                       </Link>
//                      <Link href={data.code} target="_blank" rel="noopener noreferrer"
//                       className=" bg-blue-500/70 opacity-0
//                       group-hover:opacity-100 flex items-center justify-center gap-2 text-white ">
//                         <Link2 /> code
//                       </Link>
//                     </div>
//                    </div>
//                    <h3 className="text-xl sm:text-2xl mt-4 mb-2 md:text-2xl xl:text-4xl">
//                     {data.title}
//                    </h3>
//                    <div className="flex gap-2 flex-wrap items-center">
//                     {icon.map((Icon,index)=>{
//                         return(
//                             <span key={index} className="flex p-1 rounded-sm dark:bg-[#0d0d1f] items-center bg-indigo-400 gap-1">
//                                 <Icon />
//                             </span>
//                         )
//                     })}
//                    </div>
//                 </div>
//             )
//         })}
//       </div>
//     </div>
//   )
// }
