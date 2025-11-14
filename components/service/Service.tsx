import { Services } from "@/data/data";

export default function Service() {
  return (
    <div id="Service" className='min-h-screen py-14 relative'>
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] max-w-3xl mx-auto">
      <h2 data-aos="fade-up" className="text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide">
      what we can <span className="text-cyan-500">do</span> ?
      </h2>
      <div data-aos="fade-down" data-aos-anchor-placement="top-center"  className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {Services.map(({id,image,title,info})=>(
          <div key={id} className="flex mx-auto flex-col gap-2">
            <img src={image} className="w-16 h-16" alt="" />
            <h3 className="text-xl text-cyan-500 text-start sm:text-2xl md:text-3xl font-bold">
              {title}
            </h3>
            <p className="text-start max-w-96">{info}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
