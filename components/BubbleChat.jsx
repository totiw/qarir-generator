'use client'

// Next dependencies
import Link from 'next/link'
import { useState } from 'react'

// Icons
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { IoCloseCircleOutline } from 'react-icons/io5'

function BubbleChat() {
  const [isPop, seIsPop] = useState(true)
  return (
    <div className="flex flex-row sm:gap-3 gap-2 sm:p-0 px-2 fixed z-[99] bottom-5 sm:bottom-10 sm:right-5">
      <span
        className={`${
          isPop ? 'flex' : 'hidden'
        } relative bg-white items-center rounded-xl shadow-lg px-4`}
      >
        <IoCloseCircleOutline
          onClick={() => seIsPop(false)}
          size="1.5em"
          color="#000000"
          className="absolute bg-white rounded-full shadow-lg right-0 md:-left-5 -top-2 md:top-1"
        />
        <Link
          href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
          target="_blank"
          className="sm:leading-10 md:text-base text-xs"
        >
          How may i assist you to find your best career future? 🙂
        </Link>
      </span>
      <Link
        href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
        target="_blank"
        className="relative bg-white w-14 h-14 shadow-lg rounded-xl flex justify-center items-center"
      >
        <p className="bg-orange-1 absolute -top-2 -right-1 flex justify-center items-center font-bold text-white text-sm w-6 h-6 rounded-full">
          1
        </p>
        <HiOutlineChatBubbleLeftRight size="1.5em" color="#FF9500" />
      </Link>
    </div>
  )
}

export default BubbleChat
