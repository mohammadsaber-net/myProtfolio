import { canWorkAt, usedTools } from "@/data/data";

export default function Skills() {
  return (
    



    <div className='pt-20 pb-10 min-h-screen w-[90%] mx-w-2xl sm:w-[80%] mx-auto lg:w-[70%]'>
      <div className='flex flex-col items-center md:flex-row gap-10'>
        <div>
            <h2 className='text-xl capitalize sm:text-2xl md:text-4xl font-bold'>
                my work <span className='text-cyan-500'>
                    experience
                </span>
            </h2>
            <div className="mt-10 md:mt-16">
              {canWorkAt.map((work)=>{
              const Icon = work.icon;
              return (
              <div key={work.id} className="mt-4 flex group gap-4 bg-indigo-200 dark:bg-[#0f142ed9] p-5 rounded-md md:mt-8">
                <div className="dark:bg-[#0d0d1f] bg-indigo-400 p-2 w-fit h-fit rounded-full">
                  <Icon className="size-8 text-white group-hover:scale-110 transition" />
                </div>
                <div>
                  <h3 className="text-base mb-4 sm:text-xl md-text-3xl">{work.title}</h3>
                  <p className="text-xs md:text-sm">{work.info}</p>
                </div>
              </div>
            )})}  
            </div>
        </div>
        <div>
            <h2 className='text-xl mb-16 whitespace-nowrap sm:text-2xl capitalize md:text-3xl font-bold'>
                my development <span className='text-cyan-500'>
                    tools
                </span>
            </h2>
            <div className="mt-5 bg-indigo-200 p-2 rounded-lg dark:bg-[#0f142ed9] grid gap-4 grid-cols-2">
              {usedTools.map((tool)=>{
                const Icon = tool.icon;
                return(
                  <div className="w-fit relative group dark:bg-[#0d0d1f] items-center bg-indigo-400 text-white h-fit flex gap-2 p-1 rounded-full">
                    <Icon className="text-white group-hover:scale-110 transition"/>
                    <span>{tool.title}</span>
                    <span className="absolute -top-10"></span>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  )
}
