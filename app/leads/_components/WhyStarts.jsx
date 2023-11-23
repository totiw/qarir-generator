import Image from 'next/image'

import PathYellow from '../icons/path-yellow.png'
import ClassIcon from '../icons/class.png'
import QualityIcon from '../icons/quality.png'
import IncreaseIcon from '../icons/increase.png'
import MentoringBlue from '../icons/mentoring-blue.png'
import YellowBlue from '../icons/ellipse-blue-yellow.png'

function WhyStarts() {
  return (
    <section className="relative container flex flex-col items-center gap-20 py-20 mt-28">
      <span className="absolute z-0 blur-[300px] top-40 left-20 w-[1000px] h-[1000px] rounded-full bg-[#101F50] bg-opacity-30"></span>
      <div className="flex flex-row gap-5 items-center">
        <Image
          src={YellowBlue}
          alt="path yellow"
          quality={100}
          priority={false}
          className="h-10 xl:h-14 w-auto rotate-180"
        />
        <h2 className="text-2xl xl:text-5xl font-semibold">
          Why Start Your Career with the QarirGenerator Scholarship Programme?
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-10">
        <div className="xl:max-w-lg flex flex-col gap-10 xl:gap-80 xl:-translate-y-40">
          <div className="flex flex-col xl:flex-row xl:items-center gap-3">
            <Image
              src={IncreaseIcon}
              alt="increase yellow"
              quality={100}
              priority={false}
            />
            <p className="text-base xl:text-xl font-semibold">
              Focus on increasing value and developing work portfolio
            </p>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center gap-3">
            <Image
              src={MentoringBlue}
              alt="increase yellow"
              quality={100}
              priority={false}
            />
            <p className="text-base xl:text-xl font-semibold">
              Intensive mentoring with a dual mentorship programme Experts will
              help you improve your technology skills and career mentors from HR
              experts will develop your potential and increase your selling
              point!
            </p>
          </div>
        </div>
        <Image
          src={PathYellow}
          alt="path yellow"
          quality={100}
          priority={false}
          className="xl:flex hidden"
        />
        <div className="xl:max-w-lg flex flex-col gap-10 xl:gap-80 xl:translate-y-20">
          <div className="flex flex-col xl:flex-row xl:items-center gap-3">
            <Image
              src={ClassIcon}
              alt="increase yellow"
              quality={100}
              priority={false}
            />
            <p className="text-base xl:text-xl font-semibold">
              In-depth class open to beginners. Apply for an in-depth class, to
              make you understand more, at no additional cost!
            </p>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center gap-3">
            <Image
              src={QualityIcon}
              alt="increase yellow"
              quality={100}
              priority={false}
            />
            <p className="text-base xl:text-xl font-semibold">
              Interest-free, fine-free financial assistance! High quality
              education is accessible to anyone now! Apply for a scholarship
              with payment in full or installments directly to the
              QarirGenerator Financial Aid Department.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyStarts
