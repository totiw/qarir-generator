'use client'

// Next dependencies
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Assets
import LogoBrand from 'public/logo_horizontal_color.png'
import Indonesia from '@/app/_components/icons/Indonesia'
import Istanbul from '@/app/_components/icons/Istanbul'
import Tokyo from '@/app/_components/icons/Tokyo'
import Seoul from '@/app/_components/icons/Seoul'
import Rect1 from '@/app/_components/icons/Rect1'
import Rect2 from '@/app/_components/icons/Rect2'

// Icons
import { BiSolidDownArrow } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'
import { LuMenu } from 'react-icons/lu'

function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setlanguageOpen] = useState(false)

  const dataLocations = [
    {
      name: 'indonesia',
      thumbnail: <Indonesia height="28" />,
      courses: [
        {
          name: 'data science bootcamp',
          thumbnail: <Rect1 height="28" />,
        },
        {
          name: 'digital marketing bootcamp',
          thumbnail: <Rect2 height="28" />,
        },
      ],
    },
    {
      name: 'istanbul',
      thumbnail: <Istanbul height="28" />,
      courses: [
        {
          name: 'data science bootcamp',
          thumbnail: <Rect1 height="28" />,
        },
        {
          name: 'digital marketing bootcamp',
          thumbnail: <Rect2 height="28" />,
        },
      ],
    },
    {
      name: 'tokyo',
      thumbnail: <Tokyo height="28" />,
      courses: [
        {
          name: 'data science bootcamp',
          thumbnail: <Rect1 height="28" />,
        },
        {
          name: 'digital marketing bootcamp',
          thumbnail: <Rect2 height="28" />,
        },
      ],
    },
    {
      name: 'seoul',
      thumbnail: <Seoul height="28" />,
      courses: [
        {
          name: 'data science bootcamp',
          thumbnail: <Rect1 height="28" />,
        },
        {
          name: 'digital marketing bootcamp',
          thumbnail: <Rect2 height="28" />,
        },
      ],
    },
  ]

  return (
    <header className="bg-white">
      <div className="container flex flex-row justify-between py-3">
        <div className="flex flex-row items-center gap-10">
          <Link href="/">
            <Image
              src={LogoBrand}
              alt="qarir logo brand"
              quality={100}
              className="w-32 h-auto"
              priority
            />
          </Link>
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="hidden md:flex relative"
          >
            <button className="font-semibold flex flex-row items-center gap-3">
              Course And Location{' '}
              <BiSolidDownArrow size=".6em" color="#000000" />
            </button>
            <span
              className={`${
                menuOpen ? 'flex' : 'hidden'
              } absolute border -bottom-14 left-10 z-0 w-10 h-10 bg-white shadow-sm rotate-45`}
            ></span>
            <div
              className={`${
                menuOpen ? 'flex' : 'hidden'
              } flex-row gap-5 bg-gray-50 w-[55vw] border border-slate-200 rounded-md shadow-sm absolute z-10 bottom-0 translate-y-60 p-5`}
            >
              {dataLocations.length > 0
                ? dataLocations.map((location, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <span className="flex flex-row items-center gap-2 capitalize font-black text-base">
                        {location.thumbnail}
                        {location.name}
                      </span>
                      {location?.courses?.length > 0
                        ? location.courses.map((course, index) => (
                            <span
                              key={index}
                              className="bg-white shadow-sm p-3 rounded-md flex flex-row items-center gap-2 capitalize font-bold text-sm text-left"
                            >
                              {course.thumbnail}
                              {course.name}
                            </span>
                          ))
                        : null}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <Link href="/enterprise" className="hidden md:flex font-semibold">
            Enterprise
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          {pathname === '/' && (
            <Link
              href="https://calendar.app.google/6xrDJSLWZhcYxYrs9"
              className="bg-orange-1 flex items-center rounded-full py-2 px-5 font-bold text-white"
            >
              Book A Call
            </Link>
          )}
          <span className="hidden lg:flex text-slate-300">|</span>
          <div className="hidden lg:flex flex-row items-center gap-3 font-bold">
            <button className="flex flex-row items-center gap-3 font-bold">
              <BsGlobe2 size="1.5em" color="#000000" />
              English
              <BiSolidDownArrow size=".6em" color="#000000" />
            </button>
          </div>
          <button className="md:hidden flex">
            <LuMenu size="1.6em" color="#000000" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
