// Next dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import DataScience from '../../public/data_science_2.png'
import DigitalMarketing from '../../public/digital_marketing.png'
import WebDev from '../../public/software_enginering.png'

// Icons
import { FaArrowRight } from 'react-icons/fa6'

// DUMMY DATA
const dataProgram = [
  {
    id: 1,
    label: 'Enrolled Sept 1, 2023',
    title: 'Data Science Bootcamp',
    desc: 'Learn the skills of a Data Scientist and build yours on AI products fromscratch',
    thumbnail: DataScience,
  },
  {
    id: 2,
    label: 'Enrolled Sept 1, 2023',
    title: 'Digital Marketing Bootcamp',
    desc: 'Learn the skills of a Digital Marketing and build yours on your company',
    thumbnail: DigitalMarketing,
  },
  {
    id: 3,
    label: 'Full Booked',
    title: 'Web Development Bootcamp',
    desc: 'Learn the skills of a Software Engineering and make your product impactful',
    thumbnail: WebDev,
  },
]

function CardProgram({ program }) {
  return (
    <div className="h-[500px] bg-white flex flex-col justify-between gap-5 shadow-md rounded-xl">
      <div className="flex flex-col gap-4 px-8 pt-6">
        <p
          className={`${
            program.label === 'Full Booked'
              ? 'bg-slate-300 text-black'
              : 'bg-orange-4 text-orange-1'
          } self-start py-1 px-4 rounded-md font-bold`}
        >
          {program.label}
        </p>
        <h3 className="text-4xl font-bold">{program.title}</h3>
        <p className="text-slate-500">{program.desc}</p>
        <Link
          href="#"
          className="flex flex-row items-center gap-2 font-bold text-orange-1"
        >
          See Detail <FaArrowRight size="1em" color="#FF9500" />
        </Link>
      </div>

      <Image
        src={program.thumbnail}
        alt="image program"
        quality={100}
        priority={false}
        className="w-80 self-end"
      />
    </div>
  )
}

function Programs() {
  return (
    <div className="w-4/5 mx-auto flex flex-col xl:flex-row gap-10 -mt-20">
      {dataProgram.length > 0
        ? dataProgram.map((program, index) => (
            <CardProgram key={index} program={program} />
          ))
        : null}
    </div>
  )
}

export default Programs
