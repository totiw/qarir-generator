'use client'

// Next dependencies
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Assets
import LogoBrand from 'public/logo_horizontal_color.png'
import Indonesia from '@/components/icons/Indonesia'
import English from '@/components/icons/English'

// Icons
import { BiSolidDownArrow } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'
import { LuMenu } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'

function Card({ courses, toggleMenuMobile }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex flex-col gap-5 capitalize text-sm">
        {courses?.length > 0 &&
          courses.map((course, index) => (
            <Link
              onClick={toggleMenuMobile}
              href={course.link ?? ''}
              alt={`link course ${course.name}`}
              key={index}
            >
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={course.thumbnail}
                  alt="navbar icon"
                  quality={100}
                  priority={false}
                  width={100}
                  height={100}
                  className="w-7 h-7"
                />
                <span className="font-medium">{course.name}</span>
              </div>
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

  const [selectedPrograms, setSelectedPrograms] = useState(0)

  const courses = [
    {
      name: 'digital marketing',
      desc: 'Dive into the digital marketing world! Master paid and organic channels, critical thinking skills, and analytical frameworks to boost your digital business.',
      thumbnail:
        'https://assets-global.website-files.com/61af164800e38c4f53c60b4e/64d0256eb6c6593d16f4c52d_dm-icon.svg',
      link: '/digital-marketing',
    },
    {
      name: 'MBA',
      desc: `A Master of Business Administration is a tertiary degree in business management. Originally designed to provide engineers with management skills, today the MBA takes applicants from a wide variety of disciplines. The MBA is considered a professional Master's degree as well as a traditional academic degree.`,
      thumbnail:
        'https://assets-global.website-files.com/61af164800e38c4f53c60b4e/64d0256d8416a474a53382f1_ma-icon.svg',
      link: '/mba',
    },
    {
      name: 'Program AI',
      desc: 'Step into the AI Revolution with QarirGenerator. Learn from top AI industry experts to boost your skills in Digital Marketing, Data Analytics, and more!',
      thumbnail:
        'https://assets-global.website-files.com/61af164800e38c4f53c60b4e/652df06d35eb067c27c36d05_Group%2014.svg',
      link: '/program-ai',
    },
  ]

  const ctaColor = 'blue-2'

  const toggleMenuMobile = () => {
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
              } flex-wrap xl:flex-nowrap flex-row gap-5 bg-gray-100 w-[50vw] xl:w-[1000px] border border-slate-200 rounded-lg shadow-sm absolute z-10 top-0 translate-y-14 p-5`}
            >
              <div className="w-full xl:w-[250px] flex flex-col gap-3">
                {courses?.length > 0
                  ? courses.map((course, index) => (
                      <button
                        onClick={() => setSelectedPrograms(index)}
                        key={index}
                        className="bg-white shadow-sm p-3 rounded-md flex flex-row items-center gap-2 capitalize font-bold text-sm text-left"
                      >
                        <Image
                          src={course.thumbnail}
                          alt="course"
                          quality={100}
                          priority={false}
                          width={100}
                          height={100}
                          className="w-8"
                        />
                        {course.name}
                      </button>
                    ))
                  : null}
              </div>
              <div className="xl:w-3/4 h-80 bg-white shadow-sm p-5 flex flex-col justify-between rounded-lg">
                <div className="flex flex-col gap-3">
                  <Image
                    src={courses[selectedPrograms].thumbnail}
                    alt="course"
                    quality={100}
                    priority={false}
                    width={100}
                    height={100}
                    className="w-14"
                  />
                  <h3 className="font-semibold text-lg capitalize">
                    {courses[selectedPrograms].name}
                  </h3>
                  <p className="text-sm">{courses[selectedPrograms].desc}</p>
                  <hr className="h-px mt-3 bg-gray-700 border-0" />
                </div>
                <Link
                  onClick={toggleMenu}
                  href={courses[selectedPrograms].link}
                  alt="progrmas link"
                  className="flex flex-row gap-1 items-center capitalize font-semibold text-sm tracking-wide"
                >
                  learn more
                  <HiOutlineExternalLink size="1.2em" color="#000" />
                </Link>
              </div>
            </div>
          </div>
          <Link href="/enterprise" className="hidden md:flex font-semibold">
            Partnership
          </Link>
          <Link href="/career-center" className="hidden md:flex font-semibold">
            Career
          </Link>
          <Link href="/leads" className="hidden md:flex font-semibold">
            Scholarship
          </Link>
        </div>

        {/* CTA & Language */}
        <div className="flex flex-row items-center gap-4">
          {pathname !== '/enterprise' && (
            <Link
              href="https://calendar.app.google/6xrDJSLWZhcYxYrs9"
              className={`bg-${ctaColor} flex items-center rounded-full py-2 px-5 font-bold text-white`}
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
            onClick={toggleMenuMobile}
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
              <Link onClick={toggleMenuMobile} href="/" alt="qarir home page">
                <Image
                  src={LogoBrand}
                  alt="qarir logo mobile version"
                  priority={false}
                  quality={100}
                  className="w-32"
                />
              </Link>
              <button onClick={toggleMenuMobile} type="button" className="p-1">
                <IoClose size="1.5em" color="#000000" className="opacity-50" />
              </button>
            </div>
            {/* Links & Language */}
            <div className="flex flex-col gap-5 max-h-[75vh] overflow-auto scrollbar-hide pb-5">
              {/* LINKS */}
              <div className="flex flex-col gap-5">
                <p className="font-bold text-base uppercase text-gray-400">
                  menu
                </p>
                <div className="flex flex-col">
                  <button
                    onClick={() => setMenuLinksOpen((prev) => !prev)}
                    type="button"
                    className=" flex flex-row items-center font-bold text-base"
                  >
                    Programs
                  </button>
                  <div
                    className={`${
                      menuLinksOpen
                        ? 'max-h-screen py-5'
                        : 'max-h-0 opacity-0 translate-y-52'
                    } relative flex flex-col gap-5 origin-top transition-all duration-500 ease-in-out`}
                  >
                    <Card
                      courses={courses}
                      toggleMenuMobile={toggleMenuMobile}
                    />
                  </div>
                  <Link
                    onClick={toggleMenuMobile}
                    href="/enterprise"
                    alt="enterprise"
                    className="mt-4 font-bold text-base cursor-pointer"
                  >
                    Partnership
                  </Link>
                  <Link
                    onClick={toggleMenuMobile}
                    href="/career-center"
                    alt="career"
                    className="mt-4 font-bold text-base cursor-pointer"
                  >
                    Career
                  </Link>
                  <Link
                    onClick={toggleMenuMobile}
                    href="/leads"
                    alt="career"
                    className="mt-4 font-bold text-base cursor-pointer"
                  >
                    Scholarship
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
