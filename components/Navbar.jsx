'use client'

// Next dependencies
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Assets
import LogoBrand from 'public/logo_horizontal_color.png'
import Indonesia from '@/components/icons/Indonesia'
import Istanbul from '@/components/icons/Istanbul'
import Tokyo from '@/components/icons/Tokyo'
import Seoul from '@/components/icons/Seoul'
import English from '@/components/icons/English'
import Rect1 from '@/components/icons/Rect1'
import Rect2 from '@/components/icons/Rect2'

// Icons
import { BiSolidDownArrow } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'
import { LuMenu } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

function Card({ location, toggleMenuMobel }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex flex-row items-center gap-3 capitalize font-bold text-base">
        {location.thumbnail}
        {location.name}
        {!location.active && (
          <p className="bg-red-500 py-1 px-3 flex flex-row items-center rounded-full text-xs text-white">
            soon
          </p>
        )}
      </span>
      <span className="flex flex-col gap-2 capitalize text-sm">
        {location?.courses?.length > 0 &&
          location.courses.map((course, index) => (
            <Link
              onClick={toggleMenuMobel}
              href={course.link ?? ''}
              alt={`link course ${course.name}`}
              key={index}
            >
              {course.name}
            </Link>
          ))}
      </span>
      <hr />
    </div>
  )
}

function Navbar() {
  const menuRef = useRef(null)
  const languageRef = useRef(null)
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuLinksOpen, setMenuLinksOpen] = useState(false)
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)
  const [languageOpen, setlanguageOpen] = useState(false)

  const dataLocations = [
    {
      name: 'indonesia',
      thumbnail: <Indonesia height="28" />,
      active: true,
      courses: [
        {
          name: 'data science bootcamp',
          thumbnail: <Rect1 height="28" />,
          link: '/data-science/indonesia',
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
      active: true,
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
      active: false,
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
      active: false,
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

  const ctaColor =
    pathname === '/data-science/indonesia' ? 'blue-2' : 'orange-1'

  const toggleMenuMobel = () => {
    setMenuMobileOpen((prev) => !prev)
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
    setlanguageOpen(false)
  }

  const toggleLanguage = () => {
    setlanguageOpen((prev) => !prev)
    setMenuOpen(false)
  }

  // Cek klik diluar komponen
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [menuRef])

  // Cek klik diluar komponen
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!languageRef.current?.contains(event.target)) {
        setlanguageOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [languageRef])

  return (
    <header className="bg-white">
      <nav className="container flex flex-row justify-between py-3">
        {/* Links */}
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
          <div className="hidden md:flex relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="font-semibold flex flex-row items-center gap-3"
            >
              Programs
              {/* <BiSolidDownArrow size=".6em" color="#000000" /> */}
            </button>
            <span
              className={`${
                menuOpen ? 'flex' : 'hidden'
              } absolute border -bottom-14 left-10 z-0 w-10 h-10 bg-white shadow-sm rotate-45`}
            ></span>
            <div
              className={`${
                menuOpen ? 'flex' : 'hidden'
              } flex-wrap xl:flex-nowrap flex-row gap-5 bg-gray-50 w-[55vw] border border-slate-200 rounded-md shadow-sm absolute z-10 top-0 translate-y-14 p-5`}
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
                            <Link
                              onClick={toggleMenu}
                              href={course?.link ?? ''}
                              key={index}
                              className="bg-white shadow-sm p-3 rounded-md flex flex-row items-center gap-2 capitalize font-bold text-sm text-left"
                            >
                              {course.thumbnail}
                              {course.name}
                            </Link>
                          ))
                        : null}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <Link href="/enterprise" className="hidden md:flex font-semibold">
            Partnership
          </Link>
          <Link href="/career" className="hidden md:flex font-semibold">
            Career
          </Link>
        </div>

        {/* CTA & Language */}
        <div className="flex flex-row items-center gap-4">
          {pathname !== '/enterprise' && (
            <Link
              href="https://calendar.app.google/6xrDJSLWZhcYxYrs9"
              className={`bg-${
                ctaColor ?? ''
              } flex items-center rounded-full py-2 px-5 font-bold text-white`}
            >
              Book A Call
            </Link>
          )}
          <span className="hidden lg:flex text-slate-300">|</span>
          <div
            ref={languageRef}
            className="hidden relative lg:flex flex-row items-center gap-3 font-bold"
          >
            <button
              onClick={toggleLanguage}
              className="flex flex-row items-center gap-3 font-bold"
            >
              <BsGlobe2 size="1.5em" color="#000000" />
              English
              <BiSolidDownArrow size=".6em" color="#000000" />
            </button>
            <span
              className={`${
                languageOpen ? 'flex' : 'hidden'
              } absolute border -bottom-14 right-6 z-0 w-10 h-10 bg-white shadow-sm rotate-45`}
            ></span>
            <div
              className={`${
                languageOpen ? 'flex' : 'hidden'
              } w-52 absolute bottom-0 right-0 translate-y-40 flex flex-col gap-5 bg-gray-50 p-2 border rounded-md shadow-sm`}
            >
              <span className="flex items-center gap-2 bg-white p-3 shadow-sm rounded-md font-bold text-sm">
                <English height="24" />
                English
              </span>
              <span className="flex items-center gap-2 bg-white p-3 shadow-sm rounded-md font-bold text-sm">
                <Indonesia height="24" />
                Bahasa Indonesia
              </span>
            </div>
          </div>
          <button
            onClick={toggleMenuMobel}
            className="md:hidden flex opacity-50"
          >
            <LuMenu size="1.6em" color="#000000" />
          </button>
        </div>

        {/* Mobile Ver */}
        <div
          className={`${
            menuMobileOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden fixed top-0 left-0 bottom-0 right-0 z-50 bg-gradient-to-t from-orange-4 to-white flex duration-200 ease-in-out transition-all`}
        >
          <div className="container flex flex-col gap-10 py-5">
            {/* Navbar */}
            <div className="flex flex-row justify-between items-center">
              <Link onClick={toggleMenuMobel} href="/" alt="qarir home page">
                <Image
                  src={LogoBrand}
                  alt="qarir logo mobile version"
                  priority={false}
                  quality={100}
                  className="w-32"
                />
              </Link>
              <button onClick={toggleMenuMobel} type="button" className="p-1">
                <IoClose size="1.5em" color="#000000" className="opacity-50" />
              </button>
            </div>
            {/* Links & Language */}
            <div className="flex flex-col gap-5 max-h-[75vh] overflow-auto scrollbar-hide pb-5">
              {/* LINKS */}
              <div className="flex flex-col gap-3">
                <p className="font-bold text-base uppercase text-gray-400">
                  menu
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setMenuLinksOpen((prev) => !prev)}
                    type="button"
                    className=" flex flex-row items-center gap-2 font-bold text-base"
                  >
                    Programs
                    {/* <BiSolidDownArrow
                      size=".6em"
                      color="#000000"
                      className={`${
                        menuLinksOpen ? 'rotate-180' : 'rotate-0'
                      } transition-all duration-500 ease-in-out`}
                    /> */}
                  </button>
                  <div
                    className={`${
                      menuLinksOpen
                        ? 'max-h-screen py-5'
                        : 'max-h-0 opacity-0 translate-y-52'
                    } relative flex flex-col gap-5 origin-top transition-all duration-500 ease-in-out`}
                  >
                    {dataLocations.length > 0
                      ? dataLocations.map((location, index) => (
                          <Card
                            key={index}
                            location={location}
                            toggleMenuMobel={toggleMenuMobel}
                          />
                        ))
                      : null}
                  </div>
                  <Link
                    onClick={toggleMenuMobel}
                    href="/enterprise"
                    alt="enterprise"
                    className="font-bold text-base cursor-pointer"
                  >
                    Partnership
                  </Link>
                  <Link
                    onClick={toggleMenuMobel}
                    href="/career"
                    alt="career"
                    className="font-bold text-base cursor-pointer"
                  >
                    Career
                  </Link>
                </div>
              </div>
              {/* LANGUAGE */}
              <div className="flex flex-col gap-3">
                <p className="font-bold text-base uppercase text-gray-400">
                  language
                </p>
                <div className="flex flex-row gap-5 font-bold text-sm">
                  <span className="bg-white flex flex-row items-center gap-2 p-3 px-4 rounded-md shadow-orange-2 shadow-lg ">
                    <English height="24" /> English
                  </span>
                  <span className="bg-white flex flex-row items-center gap-2 p-3 px-4 rounded-md shadow-orange-2 shadow-lg ">
                    <Indonesia height="24" /> Bahasa Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
