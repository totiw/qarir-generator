import Image from 'next/image'

import LearingImg from 'public/learning-phase.png'

function LearningPhase() {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-center justify-center gap-10 py-20 mt-28">
      <div className="sm:w-auto w-full flex flex-col gap-14">
        <h2 className="font-semibold text-4xl text-center">Learning phase</h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row text-white font-medium">
            <p className="relative z-10 py-2 bg-blue-1 rounded-r-full w-28 flex flex-col items-center">
              <span>1 - 3</span>
              <span>Month</span>
            </p>
            <p className="relative z-0 py-2 bg-[#FFEACC] text-black sm:text-xl rounded-r-full w-full sm:w-96 px-4 pl-14 flex items-center -translate-x-10">
              Practical Skill & Hands on Project
            </p>
          </div>
          <div className="flex flex-row text-white font-medium">
            <p className="relative z-10 py-2 bg-blue-1 rounded-r-full w-28 flex flex-col items-center">
              <span>4</span>
              <span>Month</span>
            </p>
            <p className="relative z-0 py-2 bg-[#DDF2FF] text-black sm:text-xl rounded-r-full w-full sm:w-96 px-4 pl-14 flex items-center -translate-x-10">
              Skill evaluation & Capstone project with hiring partners
            </p>
          </div>
          <div className="flex flex-row text-white font-medium">
            <p className="relative z-10 py-2 bg-blue-1 rounded-r-full w-28 flex flex-col items-center">
              <span>3 - 7</span>
              <span>Month</span>
            </p>
            <p className="relative z-0 py-2 bg-orange-1 text-black sm:text-xl rounded-r-full w-full sm:w-96 px-4 pl-14 flex items-center -translate-x-10">
              Optional Apprenticeship & Global Job Connector
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={LearingImg}
          alt="learning image"
          quality={100}
          priority={false}
          className="w-96 lg:w-[600px]"
        />
      </div>
    </section>
  )
}

export default LearningPhase
