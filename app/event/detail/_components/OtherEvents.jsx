import Image from 'next/image'
import Link from 'next/link'

// Assets
import Article1 from 'public/article1.png'
import Article2 from 'public/article2.png'
import Article3 from 'public/article3.png'
import Profile from 'public/hieronymus_kopong_bali.jpeg'
import Ellipse from '../../../leads/icons/ellipse-blue-yellow.png'

// Icons
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

function OtherEvents() {
  const dataOtherEvents = [
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
  ]

  return (
    <section className="container">
      <h2 className="font-bold text-3xl text-orange-1 flex items-baseline gap-5 mb-5">
        <Image
          src={Ellipse}
          alt="ellipse"
          quality={100}
          priority={false}
          className="w-8 h-8"
        />
        Other event you may like
      </h2>
      <div className="w-full overflow-auto">
        <div className="flex flex-row gap-5 xl:w-full w-max">
          {dataOtherEvents.length > 0
            ? dataOtherEvents.map((event, index) => (
                <Card key={index} data={event} />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default OtherEvents
