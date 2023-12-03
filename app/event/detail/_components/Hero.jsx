// Dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import DetailEvent from 'public/detail_event.png'

// Icons
import { FaMapLocationDot, FaPlus } from 'react-icons/fa6'

function Hero() {
  return (
    <section className="relative container xl:h-[85vh] xl:py-0 py-10 overflow-hidden flex flex-row items-center justify-center">
      <Image
        src={DetailEvent}
        alt="hero banner"
        quality={100}
        priority={false}
        className="absolute z-0 left-0 lg:w-full xl:h-auto w-max h-full"
      />
      <div className="lg:w-4/5 relative z-10 flex lg:flex-row gap-10 flex-col justify-center">
        <div className="lg:w-2/3 flex flex-col gap-5 text-white lg:text-left text-center">
          <h2 className="font-bold  lg:text-6xl text-4xl">
            Unix and Mainframe Development
          </h2>
          <p className="font-semibold text-lg lg:text-2xl">by Hieronymus</p>
          <p className="font-medium text-lg lg:text-2xl">
            Balai Kartini, Nusa Indah Theatre, Jl. Gatot Subroto No. 37,
            Kuningan, Jakarta Selatan, Jakarta, Indonesia
          </p>
          <Link
            href="/"
            alt="map link"
            className="flex lg:justify-start justify-center items-center gap-7 font-bold text-lg lg:text-2xl"
          >
            <FaMapLocationDot size="1.5em" />
            View Map
          </Link>
        </div>
        <div className="lg:w-1/3 bg-white p-10 rounded-2xl flex flex-col gap-4">
          <h3 className="font-bold text-2xl">Date & Time</h3>
          <p className="font-semibold opacity-40">
            Tuesday, 14 November 2023 at 19:00 PM
          </p>
          <button className="flex items-center gap-3 text-[#101F50] font-semibold">
            <FaPlus size="1.5em" />
            Add to Calendar
          </button>
          <div className="flex flex-col gap-2">
            <button className="bg-[#101F50] text-white font-semibold py-3 rounded-xl">
              Book Now (Free)
            </button>
            <button className="bg-[#DDF2FF] font-semibold py-3 rounded-xl">
              Book Now (Free)
            </button>
          </div>
          <p className="opacity-50 text-center">No Refunds</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
