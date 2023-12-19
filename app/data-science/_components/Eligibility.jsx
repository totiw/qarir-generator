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
      title: 'Aspiring Business Owners',
      list: [
        'Want to expand business expertise',
        'Finding mentorship and guidance',
        'Develop skillset for business problem',
        'Try to connect business with current technology',
      ],
    },
    {
      icon: <FaUserGraduate size="48px" color="#2622B9" />,
      title: 'Industry-Specific Roles',
      list: [
        'Building a strong business network',
        'Enhancing strategic decision making',
        'Gaining a competitive edge in the job market',
        'Strengthening entrepreneurial aspirations',
      ],
    },
    {
      icon: <BsFillPersonLinesFill size="48px" color="#2622B9" />,
      title: 'Individuals Pursuing Professional Development',
      list: [
        'Career advancement and promotion',
        'Development of business acumen and strategic thinking',
        'Enhancement of leadership and management skills',
        'Staying up-to-date with industry trends and practices',
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
