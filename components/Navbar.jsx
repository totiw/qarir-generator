'use client'

import Image from 'next/image'
import LogoBrand from '../public/logo_horizontal_color.png'
import Link from 'next/link'

// Icons
import { BiSolidDownArrow } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'
import { LuMenu } from 'react-icons/lu'

function Navbar() {
  return (
    <header className="flex flex-row justify-between py-3 w-4/5 mx-auto">
      <div className="flex flex-row items-center gap-10">
        <Image
          src={LogoBrand}
          alt="qarir logo brand"
          quality={100}
          className="w-32 h-auto"
          priority
        />
        <button className="hidden md:flex flex-row items-center gap-3">
          <span className="font-semibold">Course And Location</span>
          <BiSolidDownArrow size=".6em" color="#000000" />
        </button>
        <Link href="/enterprise" className="hidden md:flex font-semibold">
          Enterprise
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Link
          href="https://calendar.app.google/6xrDJSLWZhcYxYrs9"
          className="bg-orange-1 flex items-center rounded-full py-2 px-5 font-bold text-white"
        >
          Book A Call
        </Link>
        <span className="hidden lg:flex text-slate-300">|</span>
        <button className="hidden lg:flex flex-row items-center gap-3 font-bold">
          <BsGlobe2 size="1.5em" color="#000000" />
          <span>English</span>
          <BiSolidDownArrow size=".6em" color="#000000" />
        </button>
        <button className="md:hidden flex">
          <LuMenu size="1.6em" color="#000000" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
