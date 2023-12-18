import Image from 'next/image'
import HeroImage from 'public/event_qarir.webp'

function Hero() {
  return (
    <section className="relative z-0 container max-h-[80vh] overflow-hidden flex items-center">
      <h2 className="absolute sm:w-1/2 z-30 sm:left-32 sm:top-1/3 text-white drop-shadow-lg text-3xl sm:text-left text-center md:text-4xl xl:text-6xl font-semibold tracking-wide">
        Empower community. Spark opportunities. Create memories
      </h2>
      <div className="absolute bg-black bg-opacity-20 z-20 h-full w-full"></div>
      <Image
        src={HeroImage}
        alt="qarir generator event"
        quality={100}
        priority={false}
        className="w-full"
      />
    </section>
  )
}

export default Hero
