import Image from 'next/image'

import Student1 from 'public/student1.png'
import SalaryIcon from '../icons/salary.png'
import Thumbnail from 'public/hieronymus_kopong_bali.jpeg'
import Company from '../icons/company.png'
import Money from '../icons/money.png'
import Path from '../icons/Group 35.png'

function Card({ data }) {
  return (
    <div className="bg-white relative z-10 border-2 rounded-2xl w-[350px]">
      <Image
        src={Student1}
        alt="student"
        quality={100}
        priority={false}
        className="w-full"
      />
      <div className="flex flex-col gap-3 px-5 py-7">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={data.profile}
            alt="student"
            quality={100}
            priority={false}
            className="w-5 rounded-full"
          />
          <p className="font-medium">{data.name}</p>
        </div>
        <p className="flex flex-row items-center gap-3 font-medium">
          <Image
            src={Company}
            alt="company icon"
            quality={100}
            priority={false}
            className="w-5"
          />
          {data.company}
        </p>
        <p className="flex flex-row items-center gap-3 font-medium">
          <Image
            src={Money}
            alt="company icon"
            quality={100}
            priority={false}
            className="w-5"
          />
          {data.salary}
        </p>
      </div>
    </div>
  )
}

function Salary() {
  const dataSalary = [
    {
      profile: Thumbnail,
      name: 'Hieronymus',
      company: 'PT. GoTo Sejahtera',
      salary: 'Rp. 40,000,000,-',
    },
    {
      profile: Thumbnail,
      name: 'Hieronymus',
      company: 'PT. GoTo Sejahtera',
      salary: 'Rp. 40,000,000,-',
    },
    {
      profile: Thumbnail,
      name: 'Hieronymus',
      company: 'PT. GoTo Sejahtera',
      salary: 'Rp. 40,000,000,-',
    },
  ]

  return (
    <section className="relative container flex flex-col items-center gap-20 mt-28">
      <Image
        src={Path}
        alt="path"
        quality={100}
        priority={false}
        className="absolute top-0 right-0"
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <span className="before:absolute before:z-0 before:left-0 before:top-5 before:w-16 before:h-14 before:bg-blue-1 before:rounded-r-full"></span>
        <Image
          src={SalaryIcon}
          alt="salary icon"
          quality={100}
          priority={false}
          className="w-auto h-20 relative z-10"
        />
        <h2 className="font-semibold text-4xl">
          What are the salary opportunities in the Digital Industry?
        </h2>
      </div>
      <div className="relative z-10 xl:w-auto w-full overflow-auto px-10">
        <div className="w-max flex flex-row gap-10">
          {dataSalary.length > 0
            ? dataSalary.map((salary, index) => (
                <Card key={index} data={salary} />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Salary
