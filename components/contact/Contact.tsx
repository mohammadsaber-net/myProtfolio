import { LocateIcon, Phone } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div id='Contact' className='min-h-screen py-10 w-[90%] sm:w-[80%] lg:w-[80%] max-w-3xl mx-auto'>
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="bg-gray-200 dark:bg-[#0d0d1f] p-2 rounded-sm">
        <h2 data-aos="fade-up" className="text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide">
            ask for your website <span className="block text-cyan-500">now</span>
        </h2>
        <div
        data-aos-delay="200"
        data-aos="fade-left" data-aos-anchor-placement="top-center" 
        >

        <div className="dark:text-gray-300 max-w-48 mt-5 mb-10 text-gray-700 text-sm">
            Reach out to me today and let’s discuss how I can help you achieve your goals.
        </div>
        <div className="text-xl sm:text-2xl">
            <div className="flex dark:text-white mb-3 hover:text-blue-700 transition text-blue-600 gap-2 items-center">
                <Phone className="text-cyan-500"/>
                <div>+201023966702</div>
            </div>
            <a
            href="mailto:m4567s019283@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex mb-3 dark:text-white gap-2 items-center cursor-pointer hover:underline hover:text-blue-700 transition text-blue-600"
            >
            <MdEmail className="text-cyan-500" size={24} />
            <span>m4567s019283@gmail.com</span>
            </a>
            <div className="flex mb-3 dark:text-white hover:text-blue-700 transition text-blue-600 gap-2 items-center">
                <LocateIcon className="text-cyan-500"/>
                <div>El-menofia Egypt</div>
            </div>
        </div>
        <div className="flex mb-4 mt-6 gap-1 items-center">
            <a  href="https://wa.me/+201023966702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#25D366]">
                <FaWhatsapp size={36}/>
            </a>
            <a  href="https://www.linkedin.com/in/mohammad-saber-447510353/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 rounded-full transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#0077B5]">
                <FaLinkedin size={36}/>
            </a>
            <a
            href="https://t.me/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 transition-all duration-300 cursor-pointer rounded-full hover:text-white hover:bg-[#0088CC]">
                <FaTelegram size={36}/>
            </a>
            <a
            href="https://github.com/mohammadsaber-net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 transition-all duration-300 cursor-pointer rounded-full hover:text-white hover:bg-[#181717]">
                <BsGithub size={36}/>
            </a>
        </div>
        </div>
    </div>
        <div className="bg-gray-200 dark:bg-[#0d0d1f] p-2 rounded-sm">
        <h2 data-aos="fade-down" className="text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide">
            send an email
        </h2>
        <div
        data-aos-delay="200"
        data-aos="fade-right" data-aos-anchor-placement="top-center" 
        className="mt-5">
            <input type="text" className="px-4 mb-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none rounded-md w-full placeholder:text-black dark:placeholder:text-white " placeholder="name" />
            <input type="email" className="px-4 mb-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none rounded-md w-full placeholder:text-black dark:placeholder:text-white " placeholder="email address" />
            <input type="number" placeholder="phone number" className="mb-4 px-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none placeholder:text-black rounded-md w-full dark:placeholder:text-white "/>
            <textarea name="" placeholder="your message" className="resize-none w-full px-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none rounded-md 
            dark:placeholder:text-white placeholder:text-black max-w-96 h-40 overflow-auto" id=""></textarea>
            <button className="px-4 mt-4 mb-4 py-3.5 bg-slate-300 shadow-sm text-black dark:text-white dark:bg-[#363659] cursor-pointer rounded-full">
                send message
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}
