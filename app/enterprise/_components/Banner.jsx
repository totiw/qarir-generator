// Next Dependncies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import BannerImage from 'public/ilustration_enterprise.png'

// Icons
import { MdThumbUp } from 'react-icons/md'

function Banner() {
  return (
    <section className="bg-gradient-to-t from-green-2 to-white flex flex-col justify-center items-center min-h-[80vh] pb-10 xl:p-0">
      {/* Header */}
      <div className="container flex flex-col">
        <div className="flex flex-col-reverse xl:flex-row xl:items-center">
          <div className="xl:w-7/12 flex flex-col gap-10">
            <h1 className="inline-block xl:flex xl:flex-col xl:gap-4 -tracking-normal font-black text-4xl xl:text-5xl leading-normal">
              QarirGenerator for Business,
              <br />
              <span>
                <span className="enterprise banner-title self-start">
                  Train Your Team
                </span>
                or Let Us
              </span>
              Handle Your Project.
            </h1>
            <p className="lg:w-11/12 xl:w-10/12 text-slate-500 text-sm md:text-lg">
              Allow your team to become more productive, creative, and updated
              with new skills and tech training or you can accelerate your
              business by allowing us to handle some parts.
            </p>
            <Link
              href="#programs"
              className="bg-green-1 py-3 px-8 md:self-start rounded-full text-center text-white font-bold"
            >
              Find Solution
            </Link>
            <div className="flex flex-row items-center gap-3">
              <MdThumbUp size="1.8em" color="#1AD079" />
              <p className="font-bold text-sm md:text-base xl:text-xl">
                Over 100+ organizations satisfied with our work
              </p>
            </div>
          </div>
          <div className="xl:w-5/12">
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
    </section>
  )
}

export default Banner
