// Next dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import EnterpriseImg from 'public/enterppise_ilustration_3.png'

// Icons
import { FaCircleCheck } from 'react-icons/fa6'
import Dots from './icons/Dots'

function FindSolution() {
  const dataTrainingBenefit = [
    'Personalised Curriculum',
    'Create personalised service you need : from digital marketing services, data consulting, advertising, or recruitment.',
    'Get support 24/7 consultation from our expert from New york city, Istanbul, London, and Jakarta',
    'Reduce your cost and accelerate your level with us.',
  ]
  return (
    <section id="programs" className="bg-blue-4 py-20 -mb-28">
      <div
        data-aos="fade-up"
        data-aos-offset="-300"
        data-aos-delay="0"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="container flex flex-col-reverse lg:gap-0 gap-10 lg:flex-row items-center"
      >
        <div className="lg:w-2/3 flex flex-col gap-10 lg:pr-40">
          <p className="font-bold text-base text-slate-500">FIND SOLUTION</p>
          <h3 className="font-black text-3xl capitalize">
            Achieve New Level, Gain More Revenue, #AllowUs To Make It Happen.
          </h3>
          <div className="flex flex-col gap-3">
            {dataTrainingBenefit.length > 0 &&
              dataTrainingBenefit.map((training, index) => (
                <p
                  key={index}
                  className="flex items-center gap-2 font-medium text-sm lg:text-base"
                >
                  <span className="w-5">
                    <FaCircleCheck size="1.3em" color="#2622B9" />
                  </span>
                  {training}
                </p>
              ))}
          </div>
          <Link
            href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
            target="_blank"
            className="bg-blue-2 lg:self-start px-10 py-4 rounded-full font-bold text-lg text-white text-center"
          >
            Reach Us
          </Link>
        </div>
        <div className="lg:w-1/3 w-80">
          <div className="relative w-fit">
            <div className="w-10 h-10 bg-blue-2 absolute z-20 rounded-full top-10 left-5"></div>
            <div className="w-24 h-24 bg-orange-1 absolute z-20 rounded-full bottom-0 right-0"></div>
            <div className="absolute z-0 -right-10 -top-10">
              <Dots height="100" />
            </div>
            <Image
              src={EnterpriseImg}
              alt="enterprise illustration"
              priority={false}
              quality={100}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindSolution
