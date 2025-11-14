import { Copy, Copyright } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='min-h-[15vh] pb-4 text-center text-white capitalize bg-[#363659]'>
        <div className='w-[70%] border-b mx-auto py-3 my-2'>a portfolio for mohammad saber</div>
      <span className='text-gray-500'>all rights reserved <Copyright className='inline'/></span>
    </div>
  )
}
