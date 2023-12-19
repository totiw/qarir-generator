'use client'

// Next Dependncies
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'

// Assets
import BannerImage from 'public/mba.png'

function Banner() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className="bg-white flex flex-col justify-center gap-10 min-h-[70vh]">
      {/* Header */}
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        className="container grow flex flex-col-reverse xl:flex-row xl:items-center"
      >
        <div className="flex flex-col gap-10">
          <h1 className="inline-block xl:flex xl:flex-col xl:gap-5 font-black text-3xl xl:text-5xl leading-normal">
            <span>
              Accelerate Your
              <span className="bg-blue-2 text-white p-1 px-2 mx-3 rounded-lg">
                Career
              </span>
              in
              <br />
            </span>
            <span className="text-blue-2">
              Master of Business Administration
            </span>
          </h1>
          <p className="text-slate-500 font-normal text-sm lg:text-2xl">
            More than learning! Work on projects, get expert mentorship, meet
            data industry leaders, and get ready to start your Master of
            Business Administration career!😎
          </p>
          <div className="flex flex-row flex-wrap items-center gap-5">
            <span className="bg-blue-3 font-bold text-sm text-blue-2 rounded-full py-3 px-4">
              Online - Hybrid
            </span>
            <span className="bg-blue-3 font-bold text-sm text-blue-2 rounded-full py-3 px-4">
              Beginner Friendly
            </span>
            <span className="bg-blue-3 font-bold text-sm text-blue-2 rounded-full py-3 px-4">
              Expert Instructors
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mt-4">
            <Link
              href=""
              className="w-full lg:w-auto bg-blue-2 lg:px-10 lg:py-4 py-2 md:self-start rounded-full text-center text-white font-bold"
            >
              Apply Now
            </Link>
            <Link
              href="https://forms.gle/BMVkjWJ9kKePwoLK6"
              className="w-full lg:w-auto outline outline-1 outline-blue-2 lg:px-10 lg:py-4 py-2 md:self-start rounded-full text-center text-blue-2 font-bold"
            >
              Download Syllabus
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src={BannerImage}
            quality={100}
            alt="banner image"
            priority={false}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
