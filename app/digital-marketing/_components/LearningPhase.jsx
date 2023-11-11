import Link from 'next/link'

import { BsFillBriefcaseFill } from 'react-icons/bs'
import Lamp from '@/components/icons/Lamp'
import HandShake from '@/components/icons/HandShake'

function Card({ data }) {
  return (
    <div className="bg-white shadow-sm p-6 py-10 flex flex-col items-center text-center gap-5 rounded-lg">
      <span>{data.icon}</span>
      <p className="text-start lg:text-center lg:font-bold font-medium text-xl text-slate-500">
        {data.title}
      </p>
      <p>{data.desc}</p>
    </div>
  )
}

function LearningPhase() {
  const dataLearning = [
    {
      icon: <BsFillBriefcaseFill size="48px" color="#2622B9" />,
      title: 'Month 1 - Month 3',
      desc: 'Practical Skill Class & Hands on Project',
    },
    {
      icon: <Lamp height="48px" color="#2622B9" />,
      title: 'Month 4',
      desc: 'Skill evaluation & Capstone project with hiring partners',
    },
    {
      icon: <HandShake height="48px" color="#2622B9" />,
      title: 'Month 3-7',
      desc: 'Optional Apprenticeship & Global Job Connector',
    },
  ]

  return (
    <section id="learning-phase" className="flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">LEARNING PHASE</p>
      <h2 className="font-black text-2xl lg:text-4xl">WHAT WILL YOU LEARN</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
        {dataLearning.length > 0
          ? dataLearning.map((learning, index) => (
              <Card key={index} data={learning} />
            ))
          : null}
      </div>
      <Link
        href="https://forms.gle/BMVkjWJ9kKePwoLK6"
        alt="syllabus"
        className="bg-blue-2 text-white px-6 py-3 mt-5 self-center font-bold text-lg text-center rounded-full"
      >
        Download Syllabus
      </Link>
    </section>
  )
}

export default LearningPhase
