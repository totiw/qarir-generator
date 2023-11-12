import { BsFillCalendarCheckFill } from 'react-icons/bs'

function Card({ children, title }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden">
      <div className="flex flex-col gap-1 bg-blue-4 bg-opacity-50 p-5">
        <p className="font-black text-lg text-blue-2">{title}</p>
      </div>
      {children}
    </div>
  )
}

function TimelineSchedule() {
  return (
    <section id="timeline-schedule" className="flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">TIMELINE & SCHEDULE</p>
      <h2 className="font-black text-2xl lg:text-4xl">Class</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card title="COURSE TIMELINE">
          <div className="bg-white p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2 font-medium text-sm">
              <p className="flex flex-row items-center gap-2">
                <BsFillCalendarCheckFill size="1em" color="#FF9500" />{' '}
                {`- Batch 28 First Round : November 2023`}
              </p>
              <p className="flex flex-row items-center gap-2">
                <BsFillCalendarCheckFill size="1em" color="#FF9500" />
                {`- Batch 28 Last Round : January 2024`}
              </p>
            </div>
          </div>
        </Card>
        <Card title="CLASS SCHEDULE">
          <div className="bg-white p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2 font-medium text-sm">
              <p className="flex flex-row items-center gap-2">
                <BsFillCalendarCheckFill size="1em" color="#FF9500" />
                {`- Tues & Wed 19.30 - 21.30 WIB`}
              </p>
              <p className="flex flex-row items-center gap-2">
                <BsFillCalendarCheckFill size="1em" color="#FF9500" />
                {`- Saturday 13.00 - 15.00 WIB`}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default TimelineSchedule
