import {
  BsPersonBoundingBox,
  BsPersonWorkspace,
  BsFillBriefcaseFill,
} from 'react-icons/bs'
import { FaBusinessTime } from 'react-icons/fa'
import { IoMdChatbubbles } from 'react-icons/io'
import { MdManageAccounts } from 'react-icons/md'

function Card({ data }) {
  return (
    <div className="bg-white shadow-sm p-6 py-10 flex flex-col items-center text-center gap-5 rounded-lg">
      <span>{data.icon}</span>
      <p className="text-start lg:text-center lg:font-bold font-medium text-xl text-slate-500">
        {data.title}
      </p>
      <p>{data.desc}</p>

      <ul className="px-5">
        {data.list.length > 0
          ? data.list.map((list, index) => (
              <li key={index} className="text-left list-disc">
                {list}
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

function CareerSupport() {
  const dataCareer = [
    {
      icon: <BsPersonBoundingBox size="48px" color="#2622B9" />,
      title: 'Personal Branding',
      list: [
        'Build your professional profile',
        'Connect with experts',
        'Sharing your portfolio with good story telling',
        'Inspiring the world',
      ],
    },
    {
      icon: <FaBusinessTime size="48px" color="#2622B9" />,
      title: 'Business English Course',
      list: [
        'Practice with native speaker or our global trainers',
        'Business english communication to win global workforce competition',
      ],
    },
    {
      icon: <BsPersonWorkspace size="48px" color="#2622B9" />,
      title: 'Leadership & Techpreneur',
      list: [
        'Practice public speaking',
        'Improve confidence level',
        'Winning the virtual pitching/business presentation',
        'Leadership in Tech Training',
        'Stress & Time management',
      ],
    },
    {
      icon: <BsFillBriefcaseFill size="48px" color="#2622B9" />,
      title: 'Job seeking support',
      list: [
        'Career mapping session to review your personal blind spot as your career blockers',
        'Career coaching with certified professional coach',
        'Understanding the growth hack strategy to apply a job',
        'CV optimization',
      ],
    },
    {
      icon: <IoMdChatbubbles size="48px" color="#2622B9" />,
      title: 'Interview Practice',
      list: [
        'Practive interview with unexpected nterviewer question',
        'English interview practice',
        'FGD Practice',
        'Salary offer negotiation',
      ],
    },
    {
      icon: <MdManageAccounts size="48px" color="#2622B9" />,
      title: 'Management Trainee  Project',
      list: [
        'Apprenticeship Priority',
        'MT project with hiring partners within 6month',
      ],
    },
  ]
  return (
    <section id="career-support" className="section flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">CAREER SUPPORT</p>
      <h2 className="font-black text-2xl lg:text-4xl">
        Meet your Career Coach and be ready to start your career
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
        {dataCareer.length > 0
          ? dataCareer.map((career, index) => (
              <Card key={index} data={career} />
            ))
          : null}
      </div>
    </section>
  )
}

export default CareerSupport
