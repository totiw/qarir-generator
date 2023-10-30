// Next dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Background from '../../public/ilustration_2.png'

function Contact() {
  return (
    <section className="relative h-[320px] mt-28">
      <div
        className="hidden lg:block absolute z-10 top-0 bottom-0 left-0 right-0"
        style={{
          background:
            'linear-gradient(90.49deg, #00263D 36.68%, rgba(255, 255, 255, 0) 98.95%)',
        }}
      ></div>
      <div
        className="lg:hidden block absolute z-10 top-0 bottom-0 left-0 right-0"
        style={{
          background:
            'linear-gradient(359.96deg, #00263D 40.46%, rgba(0, 38, 61, 0.565899) 76.18%, rgba(255, 255, 255, 0) 105.07%)',
        }}
      ></div>
      <Image
        src={Background}
        alt="contact image"
        quality={100}
        priority={false}
        className="absolute -left-10 lg:left-auto lg:right-0 h-full max-w-fit z-0"
      />
      <div className="container relative z-10 h-full">
        <div className="flex flex-col gap-2 lg:w-1/3 justify-center h-full text-white">
          <h2 className="font-black text-3xl lg:text-4xl">
            Looking for <br /> Financial Aid?
          </h2>
          <p className="font-medium text-base">
            Finances shouldn't be the main obstacle to accessing our bootcamps.
            We're always finding new ways to facilitate payments and fundings.
          </p>
          <Link
            href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
            className="bg-orange-1 py-3 px-8 md:self-start rounded-full text-center text-white font-bold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
