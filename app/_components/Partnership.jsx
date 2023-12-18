// Next dependencies
import Image from 'next/image'
import Link from 'next/link'

// Asset
import ImagePartnership from '../../public/ilustration_11.png'

function Partnership() {
  return (
    <section className="container flex flex-col lg:flex-row items-center gap-10 mt-28">
      <div
        data-aos="fade-up"
        data-aos-offset="-300"
        data-aos-delay="0"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="lg:w-1/2 px-5"
      >
        <Image
          src={ImagePartnership}
          alt="qarir partnership"
          quality={100}
          priority={false}
          className="rounded-3xl"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="-300"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="lg:w-1/2 flex flex-col gap-4 px-4 lg:px-0"
      >
        <h2 className="font-bold text-2xl lg:text-4xl text-black">
          Are You an Enterprise Looking for a Chance to Accelerate your
          Workforces?
        </h2>
        <p className="font-medium text-base text-slate-500 lg:text-lg">
          Elevate your workforce with QarirGenerator Corporate Training
          Programme and unleash their true potential, or just as easy being our
          hiring company partner. Our alumni are the cream of the crop, so you
          know you will get the go to the game-changer.
        </p>
        <Link
          href="https://calendar.app.google/6xrDJSLWZhcYxYrs9"
          className="bg-blue-2 py-3 px-8 md:self-start rounded-full text-center text-white font-bold"
        >
          Contact Our Partnership Team
        </Link>
      </div>
    </section>
  )
}

export default Partnership
