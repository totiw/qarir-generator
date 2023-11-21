import Image from 'next/image'
import Link from 'next/link'
import ScholarWhite from '../icons/scholarship-white.png'
import ScholarBlack from '../icons/scholarship-black.png'
import EllipseBlue from '../icons/ellipse-blue.png'
import EllipseYellow from '../icons/ellipse-yellow.png'
import BlueYellow from '../icons/ellipse-blue-yellow.png'
import ChecklistWhite from '../icons/checklist-white.png'
import ChecklistBlack from '../icons/checklist-black.png'
import { FaWhatsapp } from 'react-icons/fa6'

function Card({ data, count }) {
  return (
    <div
      className={`${
        count % 2 != 0
          ? 'bg-[#00263D] text-white'
          : 'bg-orange-1 xl:-translate-x-10'
      } relative xl:w-[400px] p-7 rounded-xl flex flex-col gap-3 shadow-md`}
    >
      <Image
        src={count % 2 == 0 ? EllipseBlue : EllipseYellow}
        quality={100}
        priority={false}
        alt="scholarship icon"
        className="w-5 absolute right-3 top-3"
      />

      <div className="flex flex-row items-center gap-3 justify-center">
        <Image
          src={count % 2 == 0 ? ScholarBlack : ScholarWhite}
          quality={100}
          priority={false}
          alt="scholarship icon"
          className="w-10"
        />
        <h2 className="text-2xl font-semibold">{data.title}</h2>
      </div>

      <div className="flex flex-col gap-2">
        {data.benefit.length > 0
          ? data.benefit.map((benefit, index) => (
              <div key={index} className="flex flex-row items-center gap-3">
                <Image
                  key={index}
                  src={count % 2 != 0 ? ChecklistWhite : ChecklistBlack}
                  quality={100}
                  priority={false}
                  alt="scholarship icon"
                  className="w-auto h-10"
                />
                <p className="font-semibold">{benefit}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

function Programs() {
  const dataPrograms = [
    {
      title: 'Scholarship 30%',
      benefit: [
        'Pay only Rp 9,998,000 or',
        'Down payment Rp 2,550,000 Installment less than Rp 942,000/monthx10',
      ],
    },
    {
      title: 'Scholarship 50%',
      benefit: [
        'Pay only Rp 7,299,999 or',
        'Down payment Rp 1,890,000 Installment less than Rp 721,000/monthx10',
      ],
    },
    {
      title: 'Scholarship 30%',
      benefit: [
        'Pay only Rp 4,550,999 or',
        'Down payment Rp 1,090,000 Installment less than Rp 621,000/monthx10',
        'Limited slots, need an experience, or urgent reason to enroll',
      ],
    },
  ]

  return (
    <section className="relative container flex flex-col-reverse xl:flex-row gap-20 xl:gap-60 items-center justify-center mt-28">
      <span className="absolute z-0 blur-3xl top-20 left-20 w-[1000px] h-[800px] rounded-full bg-orange-1 bg-opacity-20"></span>
      <div className="relative z-10 flex flex-col gap-10">
        {dataPrograms.length > 0
          ? dataPrograms.map((program, index) => (
              <Card key={index} data={program} count={index + 1} />
            ))
          : null}
      </div>
      <div className="relative z-10 flex flex-col gap-7 xl:w-[500px]">
        <Image
          src={BlueYellow}
          quality={100}
          priority={false}
          alt="scholarship icon"
          className="w-8"
        />
        <h3 className="font-semibold text-4xl">
          Join Our Scholarship Program Today!
        </h3>
        <p className="text-slate-500 font-semibold text-xl">
          We invite you to seize the opportunity of a lifetime. Ready to Propel
          Your Career? Apply Now!
        </p>
        <Link
          href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
          alt="whatsapp qarir generator"
          target="_blank"
          className="bg-orange-1 py-2 px-4 flex flex-row items-center gap-2 self-start rounded-full text-white"
        >
          <FaWhatsapp />
          Join now
        </Link>
      </div>
    </section>
  )
}

export default Programs
