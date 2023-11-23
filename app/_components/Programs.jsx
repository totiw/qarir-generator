'use client'

// Next dependencies
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'

// Assets
import DataScience from 'public/data_science_2.png'
import DigitalMarketing from 'public/digital_marketing.png'
import WebDev from 'public/software_enginering.png'

// Icons
import { FaArrowRight } from 'react-icons/fa6'

// DUMMY DATA
const dataPrograms = [
  {
    id: 1,
    label: 'Enrolled Sept 1, 2023',
    title: 'Digital Marketing',
    desc: 'Learn from Experienced Digital Marketing Experts in SEA and accelerate your career as a Digital Marketing.',
    thumbnail: DigitalMarketing,
    link: '/digital-marketing',
  },
  {
    id: 2,
    label: 'Enrolled Sept 1, 2023',
    title: 'MBA',
    desc: 'Learn from Experienced MBA Experts in SEA and accelerate your career as a Master of Business Administration.',
    thumbnail: DataScience,
    link: '/mba',
  },
  {
    id: 3,
    label: 'Full Booked',
    title: 'Programme AI',
    desc: ' Learn from top AI industry experts to boost your Programme AI skills',
    thumbnail: WebDev,
    link: '/program-ai',
  },
]

function CardProgram({ program }) {
  return (
    <div className="min-h-[32em] xl:w-1/3 bg-white flex flex-col justify-between gap-5 shadow-md rounded-xl overflow-hidden">
      <div className="flex flex-col gap-4 px-8 pt-6">
        <p
          className={`${
            program.label === 'Full Booked'
              ? 'bg-slate-300 text-black'
              : 'bg-orange-4 text-orange-1'
          } self-start py-1 px-4 rounded-md font-bold`}
        >
          {program.label}
        </p>
        <h3 className="text-2xl lg:text-4xl font-bold">{program.title}</h3>
        <p className="text-slate-500">{program.desc}</p>
        <Link
          href={program.link}
          alt="link page"
          className="flex flex-row items-center gap-2 font-bold text-orange-1"
        >
          See Detail <FaArrowRight size="1em" color="#FF9500" />
        </Link>
      </div>

      <Image
        src={program.thumbnail}
        alt="image program"
        quality={100}
        priority={false}
        className="w-80 self-end"
      />
    </div>
  )
}

function Programs() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section
      id="programs"
      className="container flex flex-col xl:flex-row gap-10 pt-20 -mt-40"
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      {dataPrograms.length > 0
        ? dataPrograms.map((program, index) => (
            <CardProgram key={index} program={program} />
          ))
        : null}
    </section>
  )
}

export default Programs
