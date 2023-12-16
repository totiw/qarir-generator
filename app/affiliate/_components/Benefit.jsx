import Image from 'next/image'
import BenefitImg from 'public/affiliate-benefit.png'
import Price from 'public/Expensive Price.png'
import Collaboration from 'public/Collaboration.png'
import Report from 'public/Report Card.png'

function Card({ data }) {
  return (
    <div className="group first:bg-[#FFEACC] last:bg-orange-1 last:text-white even:bg-[#DDF2FF] flex items-center gap-5 pr-5 rounded-r-full xl:w-[483px]">
      <div className="group-odd:bg-blue-1 group-even:bg-orange-1 p-4 pr-7 py-5 rounded-r-full">
        <Image
          src={data.icon}
          alt="icon benefit"
          quality={100}
          priority={false}
        />
      </div>
      <p className="font-semibold">{data.name}</p>
    </div>
  )
}

function Benefit() {
  const dataBenefit = [
    {
      icon: Price,
      name: 'Up to 30% commission which is the highest among other affiliate programs.',
    },
    {
      icon: Collaboration,
      name: 'All you have to do is become an active Qarir Generator user on social media.',
    },
    {
      icon: Report,
      name: 'Access to all Qarir Generator Courses, while expanding your connections.',
    },
  ]

  return (
    <section className="container flex flex-col-reverse xl:flex-row justify-evenly items-center gap-10 py-20 mt-28">
      <div className="flex flex-col gap-10">
        <h2 className="font-semibold text-4xl">What Benefit?</h2>
        <div className="flex flex-col gap-5">
          {dataBenefit.length > 0
            ? dataBenefit.map((benefit, index) => (
                <Card key={index} data={benefit} />
              ))
            : null}
        </div>
      </div>
      <div>
        <Image
          src={BenefitImg}
          alt="benefit"
          quality={100}
          priority={false}
          className="w-auto rounded-2xl"
        />
      </div>
    </section>
  )
}

export default Benefit
