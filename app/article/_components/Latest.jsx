// Dependecies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Article1 from 'public/article1.png'
// import Article2 from 'public/article2.png'
// import Article3 from 'public/article3.png'
import Profile from 'public/hieronymus_kopong_bali.jpeg'

// Icons
import { FaChevronLeft } from 'react-icons/fa6'

function Card({ data }) {
  return (
    <div className="w-72 sm:w-96 border border-slate-400 bg-white rounded-xl overflow-hidden">
      <div className="flex flex-row gap-2">
        <Image
          src={data.thumbnail}
          alt="latest article"
          quality={100}
          priority={false}
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
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
          <p className="font-medium text-sm sm:text-base text-slate-500">
            {data.date}
          </p>
        </div>
        <h3 className="font-bold text-2xl mt-5">{data.title}</h3>
        <p className="line-clamp-4 font-medium">{data.desc}</p>
        <Link href={data.link} className="text-[#101F50] font-medium mt-8">
          Read More...
        </Link>
      </div>
    </div>
  )
}

function Latest() {
  const dataLatest = [
    {
      author: 'Hieronymus',
      title: 'Digital Marketing Offline Class',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ....',
      date: 'Jan 20, 2023',
      link: '/',
      thumbnail: Article1,
      profile: Profile,
    },
    {
      author: 'Hieronymus',
      title: 'Digital Marketing Offline Class',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ....',
      date: 'Jan 20, 2023',
      link: '/',
      thumbnail: Article1,
      profile: Profile,
    },
    {
      author: 'Hieronymus',
      title: 'Digital Marketing Offline Class',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ....',
      date: 'Jan 20, 2023',
      link: '/',
      thumbnail: Article1,
      profile: Profile,
    },
  ]

  return (
    <section className="container flex flex-col gap-11">
      <div className="flex flex-row justify-between">
        <h2 className="text-orange-1 font-bold text-2xl sm:text-4xl">
          Latest Article
        </h2>
        <Link href="/" className="text-[#101F50] font-medium">
          View All ...
        </Link>
      </div>
      <div className="max-w-full overflow-auto">
        <div className="flex flex-row justify-center gap-5 sm:gap-10 xl:w-full w-max">
          {dataLatest.length > 0
            ? dataLatest.map((latest, index) => (
                <Card key={index} data={latest} />
              ))
            : null}
        </div>
      </div>
      <Link
        href="/"
        className="flex items-center gap-1 text-slate-500 sm:text-2xl"
      >
        <FaChevronLeft size="1em" />
        Back to Home Page
      </Link>
    </section>
  )
}

export default Latest
