import Image from 'next/image'

import BookYellow from '../icons/book-yellow.png'

function ClassSchedule() {
  const dataClassSchedule = [
    {
      name: 'Digital Marketing',
      schedule: ['Tues & Wed 19.30 - 21.30 WIB', 'Saturday 13.00 - 15.00 WIB'],
    },
    {
      name: 'Data Science & AI Engineering',
      schedule: [
        'Thurs & Friday 19.30 - 21.30 WIB',
        'Saturday 15.00 - 17.00 WIB',
      ],
    },
    {
      name: 'Mini MBA',
      schedule: ['Tues & Wed 19.30 - 21.30 WIB', 'Saturday 13.00 - 15.00 WIB'],
    },
  ]

  return (
    <section className="container flex flex-col justify-center gap-20 py-20 mt-28">
      <div className="flex flex-col gap-20">
        <div className="relative flex flex-row">
          <Image
            src={BookYellow}
            alt="book"
            quality={100}
            priority={false}
            className="w-10 -translate-y-5 relative z-10"
          />
          <h2 className="before:absolute before:z-0 before:w-36 before:h-14 before:bg-blue-1 before:-left-3 before:-top-2 before:rounded-r-full font-extrabold text-4xl">
            <span className="text-orange-1 relative z-10">Class</span>
            <span className="text-[#101F50] relative z-10">Schedule</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center flex-wrap gap-20">
        {dataClassSchedule.length > 0
          ? dataClassSchedule.map((schedule, index) => (
              <div
                key={index}
                className="w-full sm:w-auto relative flex flex-col xl:items-start items-center gap-3 font-semibold text-lg sm:text-xl px-5"
              >
                <p className="text-3xl font-bold text-center mb-5">
                  {schedule.name}
                </p>
                {schedule?.schedule.length > 0
                  ? schedule?.schedule.map((s, i) => (
                      <p
                        key={i}
                        className="before:absolute before:-left-2 sm:before:-left-8 before:w-5 before:h-5 before:bg-orange-1 before:rounded-full before:translate-y-1"
                      >
                        {s}
                      </p>
                    ))
                  : null}
              </div>
            ))
          : nul}
      </div>
    </section>
  )
}

export default ClassSchedule
