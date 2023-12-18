import { FaSchool } from 'react-icons/fa6'
import { FaUserGraduate } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

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

function Eligibility() {
  const dataEligibility = [
    {
      icon: <FaSchool size="48px" color="#2622B9" />,
      title: 'Tech Industry Experts',
      list: [
        'Need to expand their expertise beyond traditional data analysis techniques to stay competitive',
        'Lack of understanding of AI concepts and algorithms',
        'Desire to incorporate AI and machine learning into their work',
      ],
    },
    {
      icon: <FaUserGraduate size="48px" color="#2622B9" />,
      title: 'IT Managers and Analysts',
      list: [
        'Desire to prepare their teams for the adoption of AI technologies',
        'Need to understand the potential impact of AI on their organizations',
        'Lack of knowledge about the ethical and societal implications of AI',
      ],
    },
    {
      icon: <BsFillPersonLinesFill size="48px" color="#2622B9" />,
      title: 'Business Professionals and Entrepreneurs',
      list: [
        'Need to understand how AI can transform their businesses',
        'Desire to leverage AI to gain a competitive edge',
        'Lack of technical expertise in AI',
      ],
    },
  ]
  return (
    <section id="eligibility" className="section flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">ELIGIBILITY</p>
      <h2 className="font-black text-2xl lg:text-4xl">Which one are you?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
        {dataEligibility.length > 0
          ? dataEligibility.map((eligibility, index) => (
              <Card key={index} data={eligibility} />
            ))
          : null}
      </div>
    </section>
  )
}

export default Eligibility
