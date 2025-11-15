import Link from 'next/link'
import { useApp } from '../context/AppContext'
import { NavItem } from '@/interface'
export default function MainNav() {
  const app = useApp() as { Nav?: NavItem[] } | null;
  const Nav = app?.Nav ?? [];
  return (
    <div className='hidden md:flex px-2 gap-4 rounded-full'>
      {Nav.map((navLink)=>(
        <Link className='transition relative hover:scale-105 before:absolute before:bg-blue-500 
        p-1 before:left-0 focus:pointer-event-[none] before:bottom-0 hover:before:w-full
         before:transition-all before:duration-200 before:w-0 before:h-1
         before:content-[""] focus:scale-95 focus:text-blue-600 
         focus:bg-gray-100 transition-all duration-200 rounded-md 
         hover:text-blue-500' href={navLink.url} key={navLink.id}>
        {navLink.label}
        </Link>
      ))}
    </div>
  )
}
