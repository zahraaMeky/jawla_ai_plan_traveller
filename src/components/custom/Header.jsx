import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center p-3 shadow-sm px-5'>
        <div className='flex items-center'>
            <img src='/logo.png' className='size-12	object-cover'/>
            <h2 className='font-bold text-xl'>جـــولـــة</h2>
        </div>
        <div>
          <Button>تسـجيل دخـول</Button>
        </div>
    </div>
  )
}

export default Header