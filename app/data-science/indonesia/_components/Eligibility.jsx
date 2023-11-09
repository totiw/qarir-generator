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

      <div className="flex flex-col">
        {data.list.length > 0
          ? data.list.map((list, index) => (
              <p key={index} className="text-left">
                - {list}
              </p>
            ))
          : null}
      </div>
    </div>
  )
}

function Eligibility() {
  const dataEligibility = [
    {
      icon: <FaSchool size="48px" color="#2622B9" />,
      title: 'Student of university or High school graduated',
      list: [
        'No Experience in Digital Marketing',
        '19+ Years old',
        'Able to work remotely as part time',
        'Have a good internet connection',
        'Potential to start career as Digital Marketing Specialist with Salary IDR 5Million / month (Average)',
      ],
    },
    {
      icon: <FaUserGraduate size="48px" color="#2622B9" />,
      title: 'Fresh Graduate or Early career stage',
      list: [
        'Switch career person is welcome',
        '23+ Years old',
        'Able to work remotely or working hybrid',
        'Have a good internet connection',
        'Potential to start career as Digital Marketing Specialist/Analyst with Salary IDR 7-8Million / month (Average)',
      ],
    },
    {
      icon: <BsFillPersonLinesFill size="48px" color="#2622B9" />,
      title: 'Well Experienced or Business People',
      list: [
        '28+ Years old',
        'Able to work remotely or working hybrid',
        'Have a good internet connection',
        'Potential to start career as Digital Marketing Specialist/Analyst with Salary IDR 15Million/ month (Average)',
      ],
    },
  ]
  return (
    <section id="eligibility" className="flex flex-col gap-5">
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
