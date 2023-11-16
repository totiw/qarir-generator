import Image from 'next/image'
import HeroImage from 'public/close-up-hands-holding-diplomas-caps 1.png'
import ScholarshipYellow from '@/app/leads/icons/scholarship-yellow.png'
import AccessYellow from '@/app/leads/icons/access-yellow.png'
import GlobalYellow from '@/app/leads/icons/global-yellow.png'
import LifetimeYellow from '@/app/leads/icons/lifetime-yellow.png'
import MentoringYellow from '@/app/leads/icons/mentoring-yellow.png'
import MentorshipYellow from '@/app/leads/icons/mentorship-yellow.png'
import ResultYellow from '@/app/leads/icons/result-yellow.png'

function Hero() {
  return (
    <section className="container flex flex-col xl:flex-row items-center gap-4 py-10">
      <Image
        src={HeroImage}
        quality={100}
        alt="Hero image"
        priority
        className="h-96 sm:h-[800px] w-auto rounded-2xl"
      />
      <div className="flex flex-col gap-6 pt-8 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Partial Scholarship to Archieve Your Dream Faster!
        </h2>
        <div className="px-4 md:px-8 flex flex-col gap-4 font-semibold text-lg md:text-2xl">
          <div className="flex gap-3 items-center">
            <Image
              src={ScholarshipYellow}
              quality={100}
              alt="Scholarship"
              priority
              className="w-10 h-10"
            />
            <p>Up to 70% Scholarship</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={ResultYellow}
              quality={100}
              alt="Scholarship"
              priority
              className="w-10 h-10"
            />
            <p>Fast track process (within 24 hour result)</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={MentoringYellow}
              quality={100}
              alt="Scholarship"
              priority
              className="w-10 h-10"
            />
            <p>Free mentoring session before interview session</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={AccessYellow}
              quality={100}
              alt="Scholarship"
              priority
              className="w-10 h-10"
            />
            <p>4 month access to High quality tech-bootcamp</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={LifetimeYellow}
              quality={100}
              alt="Scholarship"
              priority
              className="w-10 h-10"
            />
            <p>Lifetime career support & Job connector</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={GlobalYellow}
              quality={100}
              alt="Scholarship"
              priority
              className="w-10 h-10"
            />
            <p>Global Apprenticeship</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={MentorshipYellow}
              quality={100}
              alt="Scholarship"
              priority
              className="w-10 h-10"
            />
            <p>Dual Mentorship Program</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
