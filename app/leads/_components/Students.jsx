import Image from 'next/image'
import Link from 'next/link'

import Student1 from 'public/student1.png'
import Thumbnail from 'public/hieronymus_kopong_bali.jpeg'

function Card({ data }) {
  return (
    <div className="border rounded-xl w-[350px]">
      <Image
        src={Student1}
        alt="student"
        quality={100}
        priority={false}
        className="w-full"
      />
      <div className="flex flex-col gap-3 px-5 py-7">
        <div className="flex flex-row items-center gap-1">
          <Image
            src={data.thumbnail}
            alt="student"
            quality={100}
            priority={false}
            className="w-5 rounded-full"
          />
          <p>{data.name}</p>
        </div>
        <p>{data.message}</p>
        <Link
          href="/"
          alt="detail student says"
          className="text-[#101F50] font-medium self-end"
        >
          Read more..
        </Link>
      </div>
    </div>
  )
}

function Students() {
  const dataStudent = [
    {
      name: 'Hieronymus',
      thumbnail: Thumbnail,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    },
    {
      name: 'Hieronymus',
      thumbnail: Thumbnail,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    },
    {
      name: 'Hieronymus',
      thumbnail: Thumbnail,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    },
  ]

  return (
    <section className="container flex flex-col items-center gap-10 xl:gap-14 mt-28">
      <h2 className="text-5xl font-semibold">
        What QarirGenerator&apos;s Student Say?
      </h2>
      <div className="xl:w-auto w-screen overflow-auto px-7">
        <div className="flex flex-row gap-10 w-fit">
          {dataStudent.length > 0
            ? dataStudent.map((student, index) => (
                <Card key={index} data={student} />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Students
