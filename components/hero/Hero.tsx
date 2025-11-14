"use client"
import Link from 'next/link'
import { ArrowDown, ArrowRight} from "lucide-react"
import  Typewriter from "typewriter-effect"
import ParticlesHero from './Particle'
export default function Hero() {
  return (
    <div className='h-screen text-center w-full flex justify-center relative items-center overflow-hidden'>
        <ParticlesHero />
      <div className='flex flex-col relative z-30 justify-center items-center'>
        <div data-aos="fade-up" className='overflow-hidden border-2 w-[150px] rounded-full h-[150px] border-gray-500'>
            <img src="/images/user-1756384189933.jpeg" alt="hero image" className='w-full object-cover h-full'/>
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" className='text-xl font-bold max-w-[550px] mt-4 md:mt-8 capitalize text-center tracking-wide sm:text-2xl md:text-4xl'>
            Creating modern UIs,clean architecture, and high-performance <span className='text-cyan-500'>web applications.</span>
        </h1>
        <div  data-aos="fade-down" data-aos-delay="100" className='text-xs flex sm:text-sm md:text-xl'>
           Hi !, I'm Mohammad- A Passionate
            <Typewriter 
            options={{
                strings:[
                    'Front-End Developer',
                    'Back-End Developer',
                    'Full-Stack Developer'
                ],
                loop:true,
                autoStart:true,
                delay:75,
                deleteSpeed:25,
                wrapperClassName:"ps-2 sm:text-sm md:text-xl text-xs text-cyan-500"
            }}
            />
        </div>
        <Link data-aos="zoom-in" data-aos-delay="100" 
          href={"#Projects"}
          className="flex items-center  justify-center cursor-pointer w-fit mt-4 text-white px-3 py-2 rounded-xl transition bg-blue-600 hover:bg-blue-700 capitalize gap-2"
        >
          show my work
          <ArrowRight className='size-5' />
        </Link>

      </div>
    </div>
  )
}
