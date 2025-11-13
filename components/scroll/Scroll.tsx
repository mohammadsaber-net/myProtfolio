"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function Scroll() {
    const [hide,setHide]=useState(false)
    useEffect(()=>{
        const handleVisibility=()=>{
            if(window.scrollY>400)setHide(true)
            else setHide(false)
        }
        window.addEventListener("scroll",handleVisibility)
        return ()=>window.removeEventListener("scroll",handleVisibility)
    },[])
    const scrollToTop=()=>(
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    )
  return (
    <>
    {hide&&<div onClick={scrollToTop} className='fixed bottom-4 right-4 z-[10000] cursor-pointer 
    hover:bg-blue-600 hover:text-white transition p-2 rounded-full'>
      <FaArrowUp size={36}/>
    </div>}
    </>
  )
}
