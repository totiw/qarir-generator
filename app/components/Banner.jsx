// Next Dependncies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import BannerImage from '../../public/ilustration_1.png'
import Shopee from '../../public/shopee_color.png'
import Tokopedia from '../../public/tokopedia.png'
import Telkom from '../../public/telkom_indonesia.png'
import Dentsu from '../../public/dentsu_color.png'
import Glints from '../../public/glint_color.png'
import Kitabisa from '../../public/kitabisa_color.png'
import Mekari from '../../public/mekari_color.png'
import Bri from '../../public/bri_color.png'

// Icons
import { MdGroups } from 'react-icons/md'

function Banner() {
  // DUMMY DATA
  const sponsors = [
    { image: Shopee },
    { image: Tokopedia },
    { image: Telkom },
    { image: Dentsu },
    { image: Glints },
    { image: Kitabisa },
    { image: Mekari },
    { image: Bri },
  ]

  return (
    <section className="bg-gradient-to-t from-orange-4 to-white flex flex-col gap-10 min-h-[80vh]">
      {/* Header */}
      <div className="container flex flex-col">
        <div className="flex flex-col-reverse xl:flex-row xl:items-center">
          <div className="xl:w-2/3 flex flex-col gap-10">
            <h1 className="inline-block xl:flex xl:flex-col xl:gap-5 font-black text-3xl xl:text-5xl leading-normal">
              <span>
                Create
                <span className="banner-title hidden sm:inline self-start">
                  Success Shortcuts
                </span>
                <span className="banner-title sm:hidden mx-1">Success</span>
                <br className="sm:hidden" />
                <span className="banner-title sm:hidden">Shortcuts</span>
              </span>
              <span>& Land Your Dream Job!</span>
            </h1>
            <p className="lg:w-11/12 xl:w-10/12 text-slate-500 text-sm md:text-lg">
              Welcome to the Career Accelerator that helps you go further than
              you are in school. Built to be the best, by the best, our
              highly-qualified trainers, personal coaches, intensive classes,
              and proven method mean guaranteed results - whether you learn
              online, offline or both.
            </p>
            <Link
              href="#"
              className="bg-orange-1 py-3 px-8 md:self-start rounded-full text-center text-white font-bold"
            >
              Browse Classes
            </Link>
          </div>
          <div className="xl:w-1/3">
            <Image
              src={BannerImage}
              quality={100}
              alt="banner image"
              priority
              className="md:w-2/3 md:mx-auto xl:w-full"
            />
          </div>
        </div>
      </div>
      {/* Sponsor */}
      <div className="container flex flex-col xl:flex-row gap-10 md:gap-20 pb-40">
        <div className="flex flex-col gap-5">
          <p className="text-lg font-semibold">Talents</p>
          <span className="flex flex-row items-center gap-2">
            <MdGroups size="2em" color="#000000" />
            <p className="text-3xl font-bold">3K+</p>
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg font-semibold">Our Alumni Get Hired By</p>
          <div className="flex flex-row flex-wrap items-center gap-5">
            {sponsors.length > 0
              ? sponsors.map((sponsor, index) => (
                  <Image
                    key={index}
                    src={sponsor.image}
                    quality={100}
                    alt="sponsor"
                    className="w-auto h-6"
                    priority
                  />
                ))
              : null}
            <p className="font-semibold">and many more</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
