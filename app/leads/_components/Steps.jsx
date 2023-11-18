import Image from 'next/image'

import Assessment from '../icons/assessment.png'
import Card from '../icons/card.png'
import Decision from '../icons/decision.png'
import Form from '../icons/form.png'
import Mentor from '../icons/mentor.png'
import PathYellow from '../icons/path-yellow.png'

function Steps() {
  const dataSteps = [
    {
      id: 1,
      name: 'Fill application form',
      icon: Form,
    },
    {
      id: 2,
      name: 'Upload your latest cv/resume/student of university card',
      icon: Card,
    },
    {
      id: 3,
      name: 'Analytical assessment',
      icon: Assessment,
    },
    {
      id: 4,
      name: 'Interview process & Consultation with mentor',
      icon: Mentor,
    },
    {
      id: 5,
      name: 'Admission decision',
      icon: Decision,
    },
  ]

  return (
    <section className="container w-1/2 py-20 my-28">
      <div className="relative flex flex-col items-center gap-20">
        <Image
          src={PathYellow}
          alt="path"
          quality={100}
          priority={false}
          className="hidden xl:flex absolute h-full"
        />
        {dataSteps.length > 0
          ? dataSteps.map((step, index) => (
              <div
                key={index}
                className="w-full flex flex-col xl:flex-row xl:even:flex-row-reverse gap-10 xl:gap-0 items-center"
              >
                <div className="xl:w-1/3 order-2 xl:order-none flex justify-center">
                  <Image
                    src={step.icon}
                    alt="steps"
                    quality={100}
                    priority={false}
                    className="w-20 h-auto"
                  />
                </div>
                <div className="xl:w-1/3 order-1 xl:order-none flex justify-center text-white px-10">
                  <div className="relative w-full flex flex-row justify-center items-center">
                    <span className="relative z-10 bg-[#101F50] w-14 h-14 xl:w-20 xl:h-20 flex justify-center items-center rounded-full text-2xl xl:text-6xl">
                      {step.id}
                    </span>
                    <span className="before:absolute before:z-0 before:top-1/2 before:left-0 before:w-full before:h-0.5 before:bg-slate-200"></span>
                  </div>
                </div>
                <p className="xl:w-1/3 order-3 xl:order-none flex justify-center font-semibold text-lg xl:text-xl text-center">
                  {step.name}
                </p>
              </div>
            ))
          : null}
      </div>
    </section>
  )
}

export default Steps
