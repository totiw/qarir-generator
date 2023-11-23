import Image from 'next/image'

import Career from '../icons/WhereStart/career.png'
import Apprentice from '../icons/WhereStart/apprentice.png'
import Global from '../icons/WhereStart/global.png'
import Graduate from '../icons/WhereStart/graduate.png'
import Leader from '../icons/WhereStart/leader.png'
import Branding from '../icons/WhereStart/branding.png'
import SwitchCareer from '../icons/WhereStart/switch-career.png'
import Student from '../icons/WhereStart/student.png'

function Card({ data }) {
  return (
    <div className="xl:w-1/3 flex flex-col items-center gap-8 px-10">
      <div className="bg-[#101F50] p-5 rounded-full">
        <Image
          src={data.thumbnail}
          alt="start icon"
          quality={100}
          priority={false}
          className="xl:w-20 w-14"
        />
      </div>
      <h2 className="text-3xl font-bold text-[#101F50] text-center">
        {data.title}
      </h2>
      <p className="text-xl font-medium">{data.desc}</p>
      <div className="flex flex-col gap-12">
        {data.points.length > 0
          ? data.points.map((point, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <Image
                  src={point.thumbnail}
                  alt="point"
                  quality={100}
                  priority={false}
                  className="w-14"
                />
                <p className="font-medium text-xl">{point.desc}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

function WhereStart() {
  const dataWhereStart = [
    {
      title: 'Are you a student?',
      thumbnail: Student,
      desc: 'Without any degree start studying technology and digital business industry! In this career accelerator programme you get:',
      points: [
        {
          thumbnail: Career,
          desc: 'Career support sessions every month to get a job more easily',
        },
        {
          thumbnail: Apprentice,
          desc: 'Apprenticeship experience programme to build your first work experience',
        },
      ],
    },
    {
      title: 'Are you a Fresh Graduate or Early Career Person?',
      thumbnail: Graduate,
      desc: 'Starting a career in technology without IT/Statistics experience? Can! In this career accelerator programme you get:',
      points: [
        {
          thumbnail: Apprentice,
          desc: 'Apprenticeship experience programme to build your first work experience',
        },
        {
          thumbnail: Global,
          desc: 'Global job connector opportunities for working abroad opportunities',
        },
        {
          thumbnail: Leader,
          desc: 'Establish relationships with professionals and company leaders',
        },
      ],
    },
    {
      title: 'Are you a career switcher?',
      thumbnail: SwitchCareer,
      desc: 'In this career accelerator programme you get:',
      points: [
        {
          thumbnail: Global,
          desc: 'Global job connector opportunities for working abroad opportunities',
        },
        {
          thumbnail: Leader,
          desc: 'Establish relationships with professionals and company leaders',
        },
        {
          thumbnail: Branding,
          desc: 'Strong personal branding assistance to facilitate your career switching process!',
        },
      ],
    },
  ]

  return (
    <section className="relative container flex flex-col items-center gap-40 mt-28">
      <span className="absolute blur-3xl top-0 -right-80 w-[600px] h-[600px] rounded-full bg-orange-1 bg-opacity-10"></span>
      <span className="absolute blur-3xl bottom-0 -left-80 w-[600px] h-[600px] rounded-full bg-[#101F50] bg-opacity-10"></span>
      <h2 className="relative z-10 flex flex-row flex-wrap gap-3 font-bold text-6xl">
        <span className="relative z-10">Where to </span>
        <span className="text-orange-1 bg-[#101F50] px-2 rounded-lg before:w-8 before:h-8 before:bg-orange-1 before:rounded-full before:absolute before:z-0 before:-left-2 before:-top-2">
          Start?
        </span>
      </h2>
      <div className="relative z-10 flex flex-col xl:flex-row xl:gap-5 gap-20">
        {dataWhereStart.length > 0
          ? dataWhereStart.map((start, index) => (
              <Card key={index} data={start} />
            ))
          : null}
      </div>
    </section>
  )
}

export default WhereStart
