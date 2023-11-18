'use client'

// Next Dependncies
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'

// Assets
import BannerImage from 'public/career-centerheader.png'

// Icons

function Banner() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section
      data-aos="fade-up"
      data-aos-offset="-300"
      data-aos-delay="0"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="container flex flex-col justify-center items-center gap-3 md:min-h-[80vh] mt-20 pb-10 xl:p-0"
    >
      <h1 className="inline-block xl:flex xl:flex-col xl:gap-4 font-black text-3xl lg:text-5xl text-center">
        <span>
          Get
          <span className="career-center banner-title mx-2">Best Talent</span>
          With
        </span>
        Zero Effort!
      </h1>
      <div className="flex flex-col items-center text-center">
        <h3 className="md:w-4/5 sm:text-base text-sm">
          You dont like headhunters? Cause we dont either! Look no further than
          QarirGenerator, your ultimate partner in the world of career
          acceleration.
        </h3>
        <Image src={BannerImage} className="py-5" />
        <Link
          href="#"
          className="bg-[#1D476D] py-3 px-8 md:self-center rounded-full text-center text-white m-10 font-bold"
        >
          Meet Our Team
        </Link>
      </div>
    </section>
  )
}

export default Banner
