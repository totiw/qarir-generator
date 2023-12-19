'use client'

// Next dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Map from '../public/word_map.png'
import LogoBrand from '../public/logo_horizontal_color_white.png'

// Icons
import Instagram from '../public/instagram.png'
import Linkedin from '../public/linkedin.png'
import Tiktok from '../public/tiktok.png'
import Youtube from '../public/youtube.png'

function Footer() {
  return (
    <footer className="bg-blue-1 mt-28 relative flex justify-center">
      <Image
        src={Map}
        alt="map world"
        priority={false}
        quality={100}
        className="absolute z-0 w-2/3 opacity-30"
      />
      <div className="relative z-50 container flex flex-col lg:gap-0 gap-10 lg:flex-row pt-10 pb-40">
        <div className="lg:w-1/2 flex flex-col gap-10">
          <Image
            src={LogoBrand}
            alt="qarir generator logo"
            priority={false}
            quality={100}
            className="w-36"
          />
          <p className='class="font-normal text-base text-white lg:w-10/12'>
            QarirGenerator is the FIRST cross border talent enabler for career
            development to bridge young generation to the industry expert with
            strong 5 years market presence in South East Asia by today. Since
            2019, we are helping Indonesian build their portfolios and helping
            youngsters working in their dream job and increasing their quality
            of life significantly.
          </p>
          <div className="flex flex-row gap-3">
            <Image
              src={Instagram}
              alt="icon social media"
              priority={false}
              quality={100}
              className="h-6 w-auto"
            />
            <Image
              src={Linkedin}
              alt="icon social media"
              priority={false}
              quality={100}
              className="h-6 w-auto"
            />
            <Image
              src={Tiktok}
              alt="icon social media"
              priority={false}
              quality={100}
              className="h-6 w-auto"
            />
            <Image
              src={Youtube}
              alt="icon social media"
              priority={false}
              quality={100}
              className="h-6 w-auto"
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10 lg:gap-36">
          <div className="flex flex-col lg:flex-row lg:gap-0 gap-10">
            <div className="flex flex-col grow gap-3">
              <p className="font-bold text-lg text-orange-1 mb-7">Programmes</p>
              <Link
                href="/digital-marketing/"
                className="font-normal text-base text-white self-start"
              >
                Digital Marketing
              </Link>
              <Link
                href="/mba/"
                className="font-normal text-base text-white self-start"
              >
                MBA
              </Link>
              <Link
                href="/program-ai/"
                className="font-normal text-base text-white self-start"
              >
                Programme AI
              </Link>
            </div>
            <div className="flex flex-col grow gap-3">
              <p className="font-bold text-lg text-orange-1">
                Global Career <br /> Center
              </p>
              <Link
                href="/soon?location=indonesia"
                className="self-start font-normal text-base text-white"
              >
                Indonesia
              </Link>
              <Link
                href="/soon/?location=malaysia"
                className="font-normal text-base text-white"
              >
                Malaysia
              </Link>
              <Link
                href="/soon?location=turkiye"
                className="self-start font-normal text-base text-white"
              >
                Turkiye
              </Link>
            </div>
            {/* <div className="flex flex-col grow gap-3">
              <p className="font-bold text-lg text-orange-1 mb-7">Resources</p>
              <p className="font-normal text-base text-white">Certificate</p>
              <p className="font-normal text-base text-white">
                Privacy & Policy
              </p>
            </div> */}
            <div className="flex flex-col grow gap-3">
              <p className="font-bold text-lg text-orange-1 mb-7">About</p>
              <Link
                href="/career-center"
                className="font-normal text-base text-white"
              >
                Career
              </Link>
              <Link
                href="/enterprise"
                className="font-normal text-base text-white"
              >
                Partnership
              </Link>
              <Link
                href="/digital-marketing/#study-fee"
                className="font-normal text-base text-white"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-lg text-orange-1">REACH US</p>
            <div className="text-white">
              <p className="font-bold text-base mb-3">Jakarta</p>
              <p className="text-base">
                QarirGenerator Office 8, level 18-A, Sudirman Central Business
                District (SCBD) Jl. Jenderal Sudirman no.1, RT8/RW3, Senayan,
                Kebayoran Baru, Jakarta Selatan.
              </p>
              <p className="text-base">+62 811-1001-4420 (QarirGenerator)</p>
            </div>
            <div className="text-white">
              <p className="font-bold text-base mb-3">Istanbul</p>
              <p className="text-base">
                Maslak, Büyükdere Cad. No:255 Nurol Plaza B.02, 34450
                Sarıyer/İstanbul
              </p>
              <p className="text-base">+90 551 402 62 05</p>
            </div>
            <p className="text-white">Privacy & Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
