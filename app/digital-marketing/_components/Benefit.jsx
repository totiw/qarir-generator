import { BiSolidCustomize } from 'react-icons/bi'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import Book from '@/components/icons/Book'
import People from '@/components/icons/People'
import Lamp from '@/components/icons/Lamp'
import HandShake from '@/components/icons/HandShake'
import Stars from '@/components/icons/Stars'

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

function Benefit() {
  const dataBenefit = [
    {
      icon: <BsFillBriefcaseFill size="48px" color="#2622B9" />,
      title: 'Focused on your value development not only skill',
      desc: 'We focused on your skill development, our syllabus designed by Industry leader to help you have a great value in front of your interviewer or your dream company.',
    },
    {
      icon: <Book height="48px" color="#2622B9" />,
      title: 'Global expert center',
      desc: 'Connect with British Expert, Turkish Expert, Emirates Expert, Malaysian-Singaporean-Indonesian Expert in Tech & Digital Industry within 1 platform.',
    },
    {
      icon: <People height="48px" color="#2622B9" />,
      title: 'Lifetime career support',
      desc: 'Never have a career stuck after joining Qarirgenerator. Support from Career Coach, Career Psychologist, and Job Connector access are totally free for all of our alumni endless service with love.',
    },
    {
      icon: <Lamp height="48px" color="#2622B9" />,
      title: 'FREE Magic Session',
      desc: 'Free access to get in depth knowledge by joining intensive sessions with expert.',
    },
    {
      icon: <HandShake height="48px" color="#2622B9" />,
      title: 'Dual Mentorship Program',
      desc: 'Trainer will help you to boost your tech skill and Career mentor from HR expert will develop your potential and raising your value',
    },
    {
      icon: <Stars height="48px" color="#2622B9" />,
      title: '30 Days Money Back Guarantee',
      desc: 'Not satisfied with our service? a 30 days money back guarantee is applicable ! 100% Refundable for you, However we will always pour our lovely service for your learning experience.',
    },
    {
      icon: <BiSolidCustomize size="48px" color="#2622B9" />,
      title: 'Customized Class',
      desc: '4 Months program is too long? Need a private session and focus within a month in English class session only? You can access private classes with a global expert mentor 24/7 premium service.',
    },
  ]
  return (
    <section id="benefit" className="flex flex-col gap-2">
      <h2 className="font-black text-2xl lg:text-4xl">WHY QARIR ?</h2>
      <p className="font-normal text-base text-slate-500">
        Master Data Science dan lihat manfaat setelah kelulusan
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
        {dataBenefit.length > 0
          ? dataBenefit.map((benefit, index) => (
              <Card key={index} data={benefit} />
            ))
          : null}
      </div>
    </section>
  )
}

export default Benefit
