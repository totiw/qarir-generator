import Image from 'next/image'
import Woman from 'public/woman.png'
import Course from 'public/course.png'
import Testimoni from 'public/testimoni.png'
import Ellipse from '../../leads/icons/ellipse-blue-yellow.png'

function Hero() {
  return (
    <section className="xl:[clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_100%,0%_80%)] relative bg-[#DDF2FF] xl:min-h-[60vh] container flex flex-col-reverse xl:flex-row items-center justify-center xl:gap-40 xl:py-20 py-10">
      <Image
        src={Ellipse}
        alt="affiliate woman"
        quality={100}
        priority
        className="absolute xl:top-10 top-5 xl:right-10 right-5 z-10 xl:w-auto w-10"
      />
      <Image
        src={Ellipse}
        alt="affiliate woman"
        quality={100}
        priority={false}
        className="absolute xl:bottom-10 bottom-5 xl:left-10 left-5 z-10 xl:w-auto w-10"
      />
      <div className="flex flex-col items-center xl:items-start gap-3 xl:w-1/2 p-10">
        <h2 className="font-semibold text-2xl xl:text-4xl xl:text-start text-center">
          Share Inspiration, Earn Commissions with Qarir Generator Affiliate
        </h2>
        <p className="font-medium mb-3 xl:text-start text-center">
          Commissions up to millions just by clicking & sharing links, no
          minimum followers!
        </p>
        <button className="bg-blue-1 px-4 py-2 rounded-full text-white font-bold xl:self-start">
          Daftar Qarir Affiliate
        </button>
      </div>
      <div className="relative">
        <Image
          src={Woman}
          alt="affiliate woman"
          quality={100}
          priority={false}
          className="relative z-0 w-60 xl:w-auto"
        />
        <Image
          src={Course}
          alt="affiliate woman"
          quality={100}
          priority={false}
          className="absolute xl:top-40 top-28 -left-10 xl:w-auto w-20"
        />
        <Image
          src={Testimoni}
          alt="affiliate woman"
          quality={100}
          priority={false}
          className="absolute xl:bottom-20 bottom-10 -right-10 xl:w-auto w-40"
        />
      </div>
    </section>
  )
}

export default Hero
