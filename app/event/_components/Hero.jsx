import Image from 'next/image'
import HeroImage from 'public/event_qarir.webp'

function Hero() {
  return (
    <section className="container max-h-[80vh] overflow-hidden">
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
