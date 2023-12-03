'use client'

// Dependencies
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Assets
import Article1 from 'public/article1.png'
import Article2 from 'public/article2.png'
import Article3 from 'public/article3.png'
import Profile from 'public/hieronymus_kopong_bali.jpeg'

// Icons
import { IoSearch } from 'react-icons/io5'
import { LuSettings2 } from 'react-icons/lu'
import { GoStopwatch } from 'react-icons/go'
import { FaMapLocationDot } from 'react-icons/fa6'

function Card({ data }) {
  return (
    <div className="border border-slate-400 bg-white rounded-xl overflow-hidden">
      <div className="flex flex-row gap-2 h-40 sm:h-40 xl:h-72 overflow-hidden">
        <Image
          src={data.thumbnail}
          alt="latest article"
          quality={100}
          priority={false}
          className="w-full"
        />
      </div>
      <div className="p-5 px-10 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={data.profile}
              alt="latest article"
              quality={100}
              priority={false}
              className="w-5 h-5 rounded-full"
            />
            <p>{data.author}</p>
          </div>
          <p
            className={`${
              data.price == 'free' ? 'text-orange-1' : 'text-[#101F50]'
            } font-semibold text-sm sm:text-xl capitalize`}
          >
            {data.price !== 'free' ? `$${data.price}.00` : data.price}
          </p>
        </div>
        <h3 className="font-bold text-2xl mt-5">{data.title}</h3>
        <p className="font-medium text-slate-500 flex items-center gap-2 mt-3">
          <GoStopwatch size="1.5em" />
          {data.date}
        </p>
        <p className="font-medium text-slate-500 flex items-center gap-2">
          <FaMapLocationDot size="1.5em" />
          {data.place}
        </p>
        <Link
          href={data.link}
          className="bg-[#101F50] self-end text-white font-medium text-base sm:text-xl p-3 mt-8 rounded-xl"
        >
          Get Ticket
        </Link>
      </div>
    </div>
  )
}

function Events() {
  const [visible, setVisible] = useState(6)

  const dataEvents = [
    {
      thumbnail: Article1,
      profile: Profile,
      author: 'Hieronymus',
      title: 'Unix and Mainframe Development',
      place: 'Jakarta, Indonesia',
      date: 'Tue, 14 November 2023',
      price: 'free',
      link: '/event/detail',
    },
    {
      thumbnail: Article2,
      profile: Profile,
      author: 'Hieronymus',
      title: 'Internal Design Competition 2023',
      place: 'Bandung, Indonesia',
      date: 'Tue, 21 November 2023',
      price: '10',
      link: '/event/detail',
    },
    {
      thumbnail: Article3,
      profile: Profile,
      author: 'Hieronymus',
      title: 'How to Protecting Your Work Online',
      place: 'Jakarta, Indonesia',
      date: 'Fri, 17 November 2023',
      price: '20',
      link: '/event/detail',
    },
    {
      thumbnail: Article1,
      profile: Profile,
      author: 'Hieronymus',
      title: 'Unix and Mainframe Development',
      place: 'Jakarta, Indonesia',
      date: 'Tue, 14 November 2023',
      price: 'free',
      link: '/event/detail',
    },
    {
      thumbnail: Article2,
      profile: Profile,
      author: 'Hieronymus',
      title: 'Internal Design Competition 2023',
      place: 'Bandung, Indonesia',
      date: 'Tue, 21 November 2023',
      price: '10',
      link: '/event/detail',
    },
    {
      thumbnail: Article3,
      profile: Profile,
      author: 'Hieronymus',
      title: 'How to Protecting Your Work Online',
      place: 'Jakarta, Indonesia',
      date: 'Fri, 17 November 2023',
      price: '20',
      link: '/event/detail',
    },
    {
      thumbnail: Article1,
      profile: Profile,
      author: 'Hieronymus',
      title: 'Unix and Mainframe Development',
      place: 'Jakarta, Indonesia',
      date: 'Tue, 14 November 2023',
      price: 'free',
      link: '/event/detail',
    },
    {
      thumbnail: Article2,
      profile: Profile,
      author: 'Hieronymus',
      title: 'Internal Design Competition 2023',
      place: 'Bandung, Indonesia',
      date: 'Tue, 21 November 2023',
      price: '10',
      link: '/event/detail',
    },
    {
      thumbnail: Article3,
      profile: Profile,
      author: 'Hieronymus',
      title: 'How to Protecting Your Work Online',
      place: 'Jakarta, Indonesia',
      date: 'Fri, 17 November 2023',
      price: '20',
      link: '/event/detail',
    },
    {
      thumbnail: Article3,
      profile: Profile,
      author: 'Hieronymus',
      title: 'How to Protecting Your Work Online',
      place: 'Jakarta, Indonesia',
      date: 'Fri, 17 November 2023',
      price: '20',
      link: '/event/detail',
    },
  ]

  console.log(visible)

  const loadMore = () => {
    setVisible((prevValue) => {
      const newValue = prevValue + 3
      if (newValue < dataEvents.length) {
        return newValue
      } else {
        return dataEvents.length
      }
    })
  }

  return (
    <section className="container flex flex-col gap-32 lg:-mt-14 lg:py-0 py-10">
      {/* SEARCH INPUT */}
      <div className="bg-[#101F50] hidden lg:flex flex-col w-3/5 mx-auto px-8 py-5 rounded-lg">
        <p className="font-semibold text-white tracking-wide">Looking for</p>
        <div className="flex flex-row gap-5">
          <input
            type="text"
            name="category"
            className="grow bg-transparent py-1 border-b-2 border-b-slate-600 focus-visible:outline-none text-white text-lg font-semibold tracking-wide"
          />
          <button className="text-white bg-orange-1 p-3 rounded-xl font-bold hover:bg-orange-2 duration-200 ease-in-out transition-all">
            <IoSearch size="2em" />
          </button>
        </div>
      </div>

      {/* EVENTS LIST */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-orange-1 text-3xl sm:text-5xl font-bold">
              Upcoming Events
            </h2>
            <p className="text-slate-400 text-xl sm:text-2xl font-medium">
              Choose the events
            </p>
            <hr className="w-20 border-orange-1 border-[3px] mt-5" />
          </div>
          <div className="hidden lg:flex flex-row flex-wrap gap-3">
            <select
              name="event_date"
              id="event_date"
              className="self-start bg-[#101F50] text-white p-4 rounded-lg"
            >
              <option value="">When</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekend">Weekend</option>
            </select>
            <select
              name="event_type"
              id="event_type"
              className="self-start bg-[#101F50] text-white p-4 rounded-lg"
            >
              <option value="">Event Type</option>
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
            <select
              name="event_category"
              id="event_category"
              className="self-start bg-[#101F50] text-white p-4 rounded-lg"
            >
              <option value="">Any Category</option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="mba">MBA</option>
              <option value="data_science">Data Science</option>
              <option value="ai">AI</option>
            </select>
          </div>
          <button className="bg-[#101F50] flex lg:hidden text-white self-start p-2 rounded-xl">
            <LuSettings2 size="1.5em" />
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dataEvents.length > 0
            ? dataEvents
                .slice(0, visible)
                .map((event, index) => <Card key={index} data={event} />)
            : null}
        </div>
      </div>

      {/* LOAD MORE BUTTON */}
      {visible !== dataEvents.length && (
        <button
          onClick={loadMore}
          className="bg-[#101F50] p-3 px-10 self-center text-white sm:text-2xl font-semibold rounded-2xl"
        >
          More Event
        </button>
      )}
    </section>
  )
}

export default Events
