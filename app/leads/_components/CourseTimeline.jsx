import Image from 'next/image'

import Timeline from 'public/course-timeline.png'
import BookYellow from '../icons/book-yellow.png'

function CourseTimeline() {
  return (
    <section className="relative container flex flex-col lg:flex-row items-center justify-center gap-20 py-20 mt-28">
      <span className="absolute blur-3xl top-20 -right-80 w-[1000px] h-[1000px] rounded-full bg-orange-1 bg-opacity-20"></span>
      <div className="flex flex-col gap-20">
        <div className="relative flex flex-row">
          <Image
            src={BookYellow}
            alt="book"
            quality={100}
            priority={false}
            className="w-10 -translate-y-5 relative z-10"
          />
          <h2 className="before:absolute before:z-0 before:w-40 before:h-14 before:bg-blue-1 before:-left-3 before:-top-2 before:rounded-r-full font-extrabold text-4xl">
            <span className="text-orange-1 relative z-10">Course</span>
            <span className="text-[#101F50] relative z-10">Timeline</span>
          </h2>
        </div>
        <div className="relative flex flex-col gap-3 font-semibold text-lg sm:text-2xl px-5">
          <p className="before:absolute before:-left-2 sm:before:-left-8 before:w-5 before:h-5 before:bg-orange-1 before:rounded-full before:translate-y-1">
            Batch 28 First Round :
            <span className="text-[#101F50]">November 2023</span>
          </p>
          <p className="before:absolute before:-left-2 sm:before:-left-8 before:w-5 before:h-5 before:bg-orange-1 before:rounded-full before:translate-y-1">
            Batch 28 Last Round :
            <span className="text-[#101F50]">January 2024</span>
          </p>
        </div>
      </div>
      <div className="relative before:absolute before:z-0 before:w-full before:h-full before:border-4 before:border-[#101F50] before:left-5 before:top-5">
        <Image
          src={Timeline}
          alt="timeline"
          quality={100}
          priority={false}
          className="w-96 sm:w-[500px] relative z-10"
        />
      </div>
    </section>
  )
}

export default CourseTimeline
