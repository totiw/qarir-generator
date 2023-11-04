// Next dependencies
import Image from 'next/image'
import Link from 'next/link'

// Asset
import ImagePartnership from '../../public/ilustration_11.png'

function Partnership() {
  return (
    <section className="container flex flex-col lg:flex-row items-center gap-10 mt-28">
      <div className="lg:w-1/2 px-5">
        <Image
          src={ImagePartnership}
          alt="qarir partnership"
          quality={100}
          priority={false}
          className="rounded-3xl"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-4 px-4 lg:px-0">
        <h2 className="font-bold text-2xl lg:text-4xl text-black">
          Are You an Enterprise Looking for Tech Training or Talent ?
        </h2>
        <p className="font-medium text-base text-slate-500 lg:text-lg">
          Transform your teams with QarirGenerator corporate training or hire
          our tech-alumni now.
        </p>
        <Link
          href="https://calendar.app.google/6xrDJSLWZhcYxYrs9"
          className="bg-orange-1 py-3 px-8 md:self-start rounded-full text-center text-white font-bold"
        >
          Contact Our Partnership Team
        </Link>
      </div>
    </section>
  )
}

export default Partnership
