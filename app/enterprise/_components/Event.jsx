import Image from 'next/image'
import Link from 'next/link'

import EventImg from 'public/event.jpg'

function Event() {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="-300"
      data-aos-delay="0"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-28"
    >
      <div className="lg:w-1/2 flex flex-col gap-3">
        <h2 className="font-black text-3xl capitalize">
          Wanna create an engaging event with us?
        </h2>
        <p className="font-medium text-sm lg:text-base">
          Creating a strong and vibrant community is essential for any
          organisation or individual who wants to make a lasting impact. Events
          are a powerful tool for bringing people together, fostering
          connections, and building a sense of belonging. But planning and
          executing successful events can be a time-consuming and challenging
          task. That&apos;s where we come in. Our team of experienced event
          professionals is dedicated to helping you create events.
        </p>
        <Link
          href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
          target="_blank"
          className="bg-blue-2 lg:self-start px-10 py-3 mt-5 rounded-full font-bold text-lg text-white text-center"
        >
          Reach Us
        </Link>
      </div>
      <div className="flex flex-row justify-center rounded-2xl overflow-hidden">
        <Image
          src={EventImg}
          alt="event"
          quality={100}
          priority={false}
          className="lg:h-96"
        />
      </div>
    </section>
  )
}

export default Event
