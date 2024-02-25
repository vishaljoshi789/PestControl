import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
 
const ChatNow = () => {
  return (
    <Link href="wa.me/+919193760869" className='fixed z-10 bottom-10 right-10 animate-bounce'><Image src="/media/whatsapp.png" height={50} width={50}/></Link>
  )
}

export default ChatNow