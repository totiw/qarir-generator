'use client'

// Dependencies
import Image from 'next/image'

// Assets
import Vector5 from 'public/career-support.png'
import Ellipse from '../icons/Frame 15.png'

// Icons
import { FaChevronRight } from 'react-icons/fa'
import { BiSolidCircle } from 'react-icons/bi'
import { useState } from 'react'

function CareerSupport() {
  const [currentSelect, setCurrentSelect] = useState(0)
  const dataCareerSupport = [
    {
      name: 'Personal Branding',
      points: [
        'Build your professional profile',
        'Sharing your portfolio with good story telling',
        'Connect with experts',
        'Inspiring the world',
      ],
    },
    {
      name: 'Business English Course',
      points: [
        'Practice with native speaker or our global trainers',
        'Business english communication to win global workforce competition',
      ],
    },
    {
      name: 'Practice public speaking',
      points: [
        'Practice public speaking',
        'Improve confidence level',
        'Leadership in Tech Training',
        'Winning the virtual pitching/business presentation',
        'Stress & Time management',
      ],
    },
    {
      name: 'Job seeking support',
      points: [
        'Career mapping session to review your personal blind spot as your career blockers',
        'Understanding the growth hack strategy to apply a job',
        'CV optimization',
      ],
    },
    {
      name: 'Interview Practice',
      points: [
        'Practice interview with unexpected interview question',
        'English interview practice',
        'Salary offer negotiation',
        'FGD Practice',
      ],
    },
    {
      name: 'Management Trainee Project',
      points: [
        'Apprenticeship Priority',
        'MT project with hiring partners within 6month*',
      ],
    },
  ]

  return (
    <section className="relative container flex flex-col lg:flex-row items-center justify-center gap-10 mt-28">
      <span className="absolute blur-3xl top-0 -left-80 w-[600px] h-[600px] rounded-full bg-orange-1 bg-opacity-10"></span>
      <Image
        src={Ellipse}
        alt="ellipse"
        quality={100}
        priority={false}
        className="absolute top-0 left-0"
      />
      <div>
        <Image
          src={Vector5}
          alt="image talent role"
          quality={100}
          priority={false}
          className="w-96"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-3">
        <p className="text-orange-1 font-bold text-2xl">
          Career <span className="text-[#101F50]">Support</span>
        </p>
        <p className="font-bold text-4xl">
          Meet your Career Coach and be ready to start your career
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
                    } hover:bg-orange-1 hover:bg-opacity-30 flex flex-row items-center justify-between gap-5 p-5 rounded-lg text-left text-xl font-semibold`}
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
      </div>
    </section>
  )
}

export default CareerSupport
