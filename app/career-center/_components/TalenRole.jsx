'use client'

// Dependencies
import { useState } from 'react'
import Image from 'next/image'

// Assets
import Vector5 from 'public/talent_role.png'

// Icons
import { FaChevronRight } from 'react-icons/fa'
import { BiSolidCircle } from 'react-icons/bi'

function TalenRole() {
  const [currentSelect, setCurrentSelect] = useState(0)
  const dataCareerSupport = [
    {
      name: 'Digital Marketing',
      points: [
        'Social Media Specialist',
        'Event and Campaign Management',
        'SEO Specialist',
        'Ads Analyst',
        'Perfomance Marketing',
        'And many others',
      ],
    },
    {
      name: 'Data Science',
      points: [
        'Machine Learning Engineer',
        'Data Analyst',
        'Database Administrator',
        'Data Architect',
      ],
    },
    {
      name: 'UI/UX Design',
      points: [
        'User Interface Designer',
        'User Experience Designer',
        'Usability Tester',
        'User Researcher',
        'UX Strategist',
      ],
    },
    {
      name: 'FullStack Web Developer',
      points: [
        'Frontend Development',
        'Backend Development',
        'Database Management',
        'Server Management',
        'API Development and Integration',
        'DevOps',
      ],
    },
  ]
  return (
    <section className="container flex flex-row justify-center gap-10 mt-28">
      <div className="">
        <Image
          src={Vector5}
          alt="image talent role"
          quality={100}
          priority={false}
          width={1000}
          height={1000}
          className="w-96"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-orange-1 font-bold text-2xl">
          Talent Role <span className="text-[#101F50]">Our Talent</span>
        </p>
        <p className="font-bold text-4xl">
          Find the best tech role for your team!
        </p>
        <div className="flex flex-col lg:flex-row gap-3 mt-5">
          <div className="flex flex-col">
            {dataCareerSupport.length > 0
              ? dataCareerSupport.map((support, index) => (
                  <button
                    key={index}
                    className={`${
                      index === currentSelect
                        ? 'bg-orange-1 bg-opacity-30'
                        : 'bg-white'
                    } hover:bg-orange-1 hover:bg-opacity-30 flex flex-row items-center justify-between gap-5 p-5 rounded-lg text-left text-xl font-semibold capitalize`}
                    onClick={() => setCurrentSelect(index)}
                  >
                    <span>{support.name}</span>
                    <FaChevronRight size="1em" color="#000" />
                  </button>
                ))
              : null}
          </div>
          <div className="w-80 bg-orange-1 bg-opacity-10 flex flex-col gap-5 p-5 rounded-lg">
            {dataCareerSupport[currentSelect].points.length > 0
              ? dataCareerSupport[currentSelect].points.map((point, index) => (
                  <p key={index} className="flex flex-row items-baseline gap-2">
                    <span className="w-5">
                      <BiSolidCircle size="1em" color="#FF9500" />
                    </span>
                    {point}
                  </p>
                ))
              : null}
          </div>
        </div>
        {/* <div className="flex flex-row gap-3 mt-5">
          <div className="flex flex-col">
            <button className="group flex flex-row items-center justify-between gap-5 p-5 rounded-lg bg-[#101F50] text-white text-xl font-semibold">
              <span>Digital Marketing</span>
              <FaChevronRight
                size="1em"
                color="#fff"
                className="group-hover:fill-white"
              />
            </button>
            <button className="group flex flex-row items-center justify-between gap-5 p-5 rounded-lg hover:bg-[#101F50] hover:text-white text-xl font-semibold">
              <span>MBA</span>
              <FaChevronRight
                size="1em"
                color="#000"
                className="group-hover:fill-white"
              />
            </button>
            <button className="group flex flex-row items-center justify-between gap-5 p-5 rounded-lg hover:bg-[#101F50] hover:text-white text-xl font-semibold">
              <span>Programme AI</span>
              <FaChevronRight
                size="1em"
                color="#000"
                className="group-hover:fill-white"
              />
            </button>
          </div>
          <div className="bg-slate-200 flex flex-col gap-5 p-5 rounded-lg">
            <p className="flex flex-row gap-2">
              <BiSolidCircle size="1em" color="#0D3860" />
              Social Media Specialist
            </p>
            <p className="flex flex-row gap-2">
              <BiSolidCircle size="1em" color="#0D3860" />
              Event and Campaign Management
            </p>
            <p className="flex flex-row gap-2">
              <BiSolidCircle size="1em" color="#0D3860" />
              SEO Specialist
            </p>
            <p className="flex flex-row gap-2">
              <BiSolidCircle size="1em" color="#0D3860" />
              Ads Analyst
            </p>
            <p className="flex flex-row gap-2">
              <BiSolidCircle size="1em" color="#0D3860" />
              Perfomance Marketing
            </p>
            <p className="flex flex-row gap-2">
              <BiSolidCircle size="1em" color="#0D3860" />
              And many others
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default TalenRole
