'use client'

import Image from 'next/image'
import Link from 'next/link'

import { CiDiscount1 } from 'react-icons/ci'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Assets
import Article1 from 'public/article1.png'
import Article2 from 'public/article2.png'
import Article3 from 'public/article3.png'
import { useRef } from 'react'

function Event() {
  const sliderRef = useRef()
  const dataEvents = [
    {
      thumbnail: Article1,
      link: '/event/detail',
    },
    {
      thumbnail: Article2,
      link: '/event/detail',
    },
    {
      thumbnail: Article3,
      link: '/event/detail',
    },
    {
      thumbnail: Article1,
      link: '/event/detail',
    },
    {
      thumbnail: Article2,
      link: '/event/detail',
    },
  ]

  const slideLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 404
  }

  const slideRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 404
  }

  return (
    <section className="container flex flex-col lg:flex-row lg:items-center gap-10 mt-28">
      <div className="lg:w-1/3 flex flex-col gap-5">
        <CiDiscount1 size="2em" color="#06b6d4" />
        <h2 className="font-semibold text-4xl">
          Check out the promo before you go!
        </h2>
        <button className="bg-[#DDF2FF] self-start py-2 px-4 rounded-lg text-blue-500 font-semibold">
          See all promo
        </button>
      </div>
      <div className="lg:w-2/3 flex flex-col gap-5">
        <div className="flex flex-row flex-wrap gap-3">
          <button className="min-w-[100px] border p-2 px-4 text-slate-500 border-slate-300 active:border-blue-400 active:bg-blue-100 active:text-blue-500 rounded-full">
            All
          </button>
          <button className="min-w-[100px] border p-2 px-4 text-slate-500 border-slate-300 active:border-blue-400 active:bg-blue-100 active:text-blue-500 rounded-full">
            UI/UX
          </button>
          <button className="min-w-[100px] border p-2 px-4 text-slate-500 border-slate-300 active:border-blue-400 active:bg-blue-100 active:text-blue-500 rounded-full">
            AI
          </button>
          <button className="min-w-[100px] border p-2 px-4 text-slate-500 border-slate-300 active:border-blue-400 active:bg-blue-100 active:text-blue-500 rounded-full">
            Digital Marketing
          </button>
        </div>
        <div
          ref={sliderRef}
          className="snap-x grid grid-flow-col overflow-x-scroll scroll-smooth gap-5"
        >
          {dataEvents.length > 0
            ? dataEvents.map((event, index) => (
                <div
                  key={index}
                  className="snap-start w-96 rounded-xl overflow-hidden"
                >
                  <Link href={event.link}>
                    <Image
                      src={event.thumbnail}
                      alt="event item"
                      quality={100}
                      priority={false}
                      className="w-full"
                    />
                  </Link>
                </div>
              ))
            : null}
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={slideLeft}
            className="bg-white shadow-md p-3 rounded-xl"
          >
            <FaChevronLeft size="1.5em" color="#64748b" />
          </button>
          <button
            onClick={slideRight}
            className="bg-white shadow-md p-3 rounded-xl"
          >
            <FaChevronRight size="1.5em" color="#64748b" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Event
