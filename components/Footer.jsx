'use client'

// Next dependencies
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Map from '../public/word_map.png'
import LogoBrand from '../public/logo_horizontal_color_white.png'
import DataScience from 'public/data_science_2.png'
import DigitalMarketing from 'public/digital_marketing.png'
import WebDev from 'public/software_enginering.png'
import Indonesia from 'public/indonesia.png'
import Instanbul from 'public/istanbul.png'
import Korea from 'public/south_korea.png'
import Tokyo from 'public/tokyo.jpg'

// Icons
import Instagram from '../public/instagram.png'
import Linkedin from '../public/linkedin.png'
import Tiktok from '../public/tiktok.png'
import Youtube from '../public/youtube.png'

// Components
import Modal from './Modal'

function Label() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-slate-700 bg-opacity-50 rounded-lg">
      <p className="absolute top-2 left-2 bg-white w-fit p-1 px-3 text-xs font-bold text-orange-1 rounded-full">
        Soon
      </p>
    </div>
  )
}

function BootcampModal({ destinations, openModal, setOpenModal }) {
  return (
    <Modal
      isOpen={openModal}
      setIsOpen={setOpenModal}
      title="Where would you like to learn Digital Marketing Bootcamp?"
      desc="You can choose to learn digital marketing in over 3 country ready
    or online. Find now your learning destination!"
    >
      <div className="flex flex-row flex-wrap gap-4">
        {destinations.length > 0 ? (
          destinations.map((destiny, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="relative">
                {!destiny.active && <Label />}
                <Link
                  onClick={() => setOpenModal((prev) => !prev)}
                  href={destiny?.link ?? '#'}
                >
                  <Image
                    src={destiny?.thumbnail}
                    alt="destination"
                    quality={100}
                    priority={false}
                    className="w-24 h-24 rounded-lg"
                  />
                </Link>
              </div>
              <p className="font-bold text-sm capitalize px-1">
                {destiny?.name}
              </p>
            </div>
          ))
        ) : (
          <p>No destination</p>
        )}
      </div>
    </Modal>
  )
}

function InternationalModal({
  internationalBootcamp,
  openModal,
  setOpenModal,
}) {
  return (
    <Modal
      isOpen={openModal}
      setIsOpen={setOpenModal}
      title="Where would you like to learn Digital Marketing Bootcamp?"
      desc="You can choose to learn digital marketing in over 3 country ready
    or online. Find now your learning destination!"
    >
      <div className="flex flex-row flex-wrap gap-4">
        {internationalBootcamp.length > 0
          ? internationalBootcamp.map((bootcamp, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="relative">
                  <Link
                    onClick={() => setOpenModal((prev) => !prev)}
                    href={bootcamp?.link ?? '#'}
                  >
                    <Image
                      src={bootcamp?.thumbnail}
                      alt="destination"
                      quality={100}
                      priority={false}
                      className="w-24 h-24 rounded-lg"
                    />
                  </Link>
                </div>
                <p className="font-bold text-sm capitalize px-1">
                  {bootcamp?.name}
                </p>
              </div>
            ))
          : null}
      </div>
    </Modal>
  )
}

function Footer() {
  const [openModalBootcamp, setOpenModalBootcamp] = useState(false)
  const [openInternationalModal, setInternationalModal] = useState(false)
  const [bootcamps, setBootcamp] = useState(0)

  // DUMMY DATA
  const internationalBootcamp = [
    {
      id: 1,
      title: 'Bootcamp Indonesia',
      bootcamps: [
        {
          name: 'Data Science',
          thumbnail: DataScience,
          link: '/data-science/indonesia',
        },
        {
          name: 'Digital Marketing',
          thumbnail: DigitalMarketing,
          link: '/digital-marketing/indonesia',
        },
      ],
    },
    {
      id: 2,
      title: 'Bootcamp Istanbul',
      bootcamps: [
        {
          name: 'Data Science',
          thumbnail: DataScience,
          link: '/data-science/istanbul',
        },
        {
          name: 'Digital Marketing',
          thumbnail: DigitalMarketing,
          link: '/digital-marketing/istanbul',
        },
      ],
    },
  ]

  const destinations = [
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
  ]
  return (
    <footer className="bg-blue-1 mt-28 relative flex justify-center">
      <BootcampModal
        destinations={destinations}
        openModal={openModalBootcamp}
        setOpenModal={setOpenModalBootcamp}
      />
      <InternationalModal
        internationalBootcamp={internationalBootcamp[bootcamps].bootcamps}
        openModal={openInternationalModal}
        setOpenModal={setInternationalModal}
      />
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
            Since 2019, QarirGenerator is a career accelerator for freshgraduate
            and early career stage people to achieve their dream job in tech by
            bridging them into our hiring partners and even becoming outstanding
            in the tech industry.
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
              <p className="font-bold text-lg text-orange-1 mb-7">Bootcamp</p>
              <button
                onClick={() => setOpenModalBootcamp(true)}
                className="font-normal text-base text-white self-start"
              >
                Digital Marketing
              </button>
              <button
                onClick={() => setOpenModalBootcamp(true)}
                className="font-normal text-base text-white self-start"
              >
                Data Science
              </button>
            </div>
            <div className="flex flex-col grow gap-3">
              <p className="font-bold text-lg text-orange-1">
                Global Career <br /> Center
              </p>
              <button
                onClick={() => {
                  setBootcamp(0)
                  setInternationalModal(true)
                }}
                className="self-start font-normal text-base text-white"
              >
                Indonesia
              </button>
              <Link
                href="/soon/Malaysia"
                className="font-normal text-base text-white"
              >
                Malaysia
              </Link>
              <button
                onClick={() => {
                  setBootcamp(1)
                  setInternationalModal(true)
                }}
                className="self-start font-normal text-base text-white"
              >
                Turkiye
              </button>
            </div>
            <div className="flex flex-col grow gap-3">
              <p className="font-bold text-lg text-orange-1 mb-7">Resources</p>
              <p className="font-normal text-base text-white">Certificate</p>
              <p className="font-normal text-base text-white">
                Privacy & Policy
              </p>
            </div>
            <div className="flex flex-col grow gap-3">
              <p className="font-bold text-lg text-orange-1 mb-7">About</p>
              <p className="font-normal text-base text-white">Career</p>
              <p className="font-normal text-base text-white">Partnership</p>
              <p className="font-normal text-base text-white">Pricing</p>
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
