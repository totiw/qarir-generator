'use client'

// Next dependencies
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Assets
import DataScience from 'public/data_science_2.png'
import DigitalMarketing from 'public/digital_marketing.png'
import WebDev from 'public/software_enginering.png'
import Indonesia from 'public/indonesia.png'
import Instanbul from 'public/istanbul.png'
import Korea from 'public/south_korea.png'
import Tokyo from 'public/tokyo.jpg'

import Modal from '@/components/Modal'

// Icons
import { FaArrowRight } from 'react-icons/fa6'

// DUMMY DATA
const dataProgram = [
  {
    id: 1,
    label: 'Enrolled Sept 1, 2023',
    title: 'Data Science Bootcamp',
    desc: 'Learn the skills of a Data Scientist and build yours on AI products fromscratch',
    thumbnail: DataScience,
    destinations: [
      {
        name: 'indonesia',
        thumbnail: Indonesia,
        active: true,
        link: '/data-science/indonesia',
      },
      {
        name: 'istanbul',
        thumbnail: Instanbul,
        active: true,
      },
      {
        name: 'tokyo',
        thumbnail: Tokyo,
        active: false,
      },
      {
        name: 'seoul',
        thumbnail: Korea,
        active: false,
      },
    ],
  },
  {
    id: 2,
    label: 'Enrolled Sept 1, 2023',
    title: 'Digital Marketing Bootcamp',
    desc: 'Learn the skills of a Digital Marketing and build yours on your company',
    thumbnail: DigitalMarketing,
    destinations: [
      {
        name: 'indonesia',
        thumbnail: Indonesia,
        active: true,
      },
      {
        name: 'istanbul',
        thumbnail: Instanbul,
        active: true,
      },
      {
        name: 'tokyo',
        thumbnail: Tokyo,
        active: false,
      },
      {
        name: 'seoul',
        thumbnail: Korea,
        active: false,
      },
    ],
  },
  {
    id: 3,
    label: 'Full Booked',
    title: 'Web Development Bootcamp',
    desc: 'Learn the skills of a Software Engineering and make your product impactful',
    thumbnail: WebDev,
    destinations: [
      {
        name: 'indonesia',
        thumbnail: Indonesia,
        active: true,
      },
      {
        name: 'istanbul',
        thumbnail: Instanbul,
        active: true,
      },
      {
        name: 'tokyo',
        thumbnail: Tokyo,
        active: false,
      },
      {
        name: 'seoul',
        thumbnail: Korea,
        active: false,
      },
    ],
  },
]

function Label() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-slate-700 bg-opacity-50 rounded-lg">
      <p className="absolute top-2 left-2 bg-white w-fit p-1 px-3 text-xs font-bold text-orange-1 rounded-full">
        Soon
      </p>
    </div>
  )
}

function CardProgram({ program }) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="min-h-[32em] bg-white flex flex-col justify-between gap-5 shadow-md rounded-xl overflow-hidden">
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <div className="flex flex-row flex-wrap gap-4">
          {program.destinations.length > 0 ? (
            program.destinations.map((destination, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="relative">
                  {!destination.active && <Label />}
                  <Link href={destination?.link ?? '#'}>
                    <Image
                      src={destination?.thumbnail}
                      alt="destination"
                      quality={100}
                      priority={false}
                      className="w-24 h-24 rounded-lg"
                    />
                  </Link>
                </div>
                <p className="font-bold text-sm capitalize px-1">
                  {destination?.name}
                </p>
              </div>
            ))
          ) : (
            <p>No destination</p>
          )}
        </div>
      </Modal>
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
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="flex flex-row items-center gap-2 font-bold text-orange-1"
        >
          See Detail <FaArrowRight size="1em" color="#FF9500" />
        </button>
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
  return (
    <section
      id="programs"
      className="container flex flex-col xl:flex-row gap-10 pt-20 -mt-40"
    >
      {dataProgram.length > 0
        ? dataProgram.map((program, index) => (
            <CardProgram key={index} program={program} />
          ))
        : null}
    </section>
  )
}

export default Programs
