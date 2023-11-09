import { useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'

function Accordion({ data }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white basis-1/3 h-fit p-5 flex flex-col gap-5 rounded-lg shadow-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex flex-row items-center justify-between"
      >
        <div className="flex flex-row items-center gap-3">
          <span>{data.icon}</span>
          <div className="flex flex-row flex-wrap items-center 2xl:gap-3">
            <h4 className="text-left font-bold lg:text-xl text-base">
              {data.title}
            </h4>
            <p className="text-left font-normal lg:text-xl text-base">
              {data.moduleCount > 0 ? `(Module ${data.moduleCount})` : null}
            </p>
          </div>
        </div>
        <span
          className={`${
            open && 'rotate-180'
          } transition-all duration-300 ease-in-out`}
        >
          <BiSolidDownArrow size=".6em" />
        </span>
      </button>
      <p className={`${!open && 'hidden'} text-sm`}>{data.desc}</p>
    </div>
  )
}

export default Accordion
