// NExt dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Video1 from '../../public/video_1.png'
import Video2 from '../../public/video_2.png'
import Video3 from '../../public/video_3.png'

// Icons
import { FaPlayCircle } from 'react-icons/fa'
import Quote from './icons/Quote'

const dataClasses = [
  {
    thumbnail: Video1,
    title: 'Digital Marketing Offline Class',
    link: 'https://youtu.be/FPZxdd4fZ_k',
  },
  {
    thumbnail: Video2,
    title: 'What They Say? (Student QnA)',
    link: 'https://youtu.be/GRLniV4UJPY',
  },
  {
    thumbnail: Video3,
    title: 'QnA With Trainer (Digital for Newbie)',
    link: 'https://youtu.be/YX0ncJCCurk',
  },
]

function Card({ thumbnail, title, link }) {
  return (
    <div className="bg-white p-6 flex flex-col items-center gap-10 rounded-lg">
      <div className="relative flex justify-center">
        <Image
          src={thumbnail}
          priority={false}
          quality={100}
          alt="thumbnail class"
        />
        <Link
          href={link}
          className="bg-orange-1 flex flex-row items-center w-fit px-8 py-3 gap-3 text-white rounded-full absolute -bottom-5"
        >
          <FaPlayCircle size="1.5em" color="#ffffff" />
          <span className="text-lg font-bold">Play</span>
        </Link>
      </div>
      <p className="font-bold text-xl lg:text-2xl">{title}</p>
    </div>
  )
}

function Classes() {
  return (
    <section className="mt-40">
      <div className="bg-[#00263D] relative text-white flex flex-col py-20 pb-56 z-0">
        <div className="container flex flex-col items-center gap-8 text-center">
          <span className="absolute right-6 top-6">
            <Quote height="90" color="#FF9500" />
          </span>
          <span className="absolute bottom-10 lg:bottom-6 left-6">
            <Quote height="90" color="#FF9500" />
          </span>
          <h2 className="lg:w-1/2 text-2xl lg:text-4xl font-black">
            More Than A Bootcamp. Get Hired At Top Tech Companies.
          </h2>
          <p className="lg:w-1/2 font-medium">
            QarirGenerator helps you land your dream job. Our career managers
            guide you at the end of your bootcamp with 7.1 NPS Score (Highest in
            Education Field)
          </p>
          <div className="flex flex-col lg:flex-row gap-24 py-10">
            <div className="basis-1/4 classes-stats">
              <span>3K+</span>
              <span>Alumni</span>
            </div>
            <div className="basis-2/4 classes-stats">
              <span>91%</span>
              <span>Alumni Get a Job Less Than 12 Months</span>
            </div>
            <div className="basis-1/4 classes-stats">
              <span>88%</span>
              <span>Completed Rate</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative container flex flex-col items-center gap-10 -mt-40 z-10">
        <h2 className="text-2xl lg:text-4xl font-black text-white">
          See Our Class!!
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {dataClasses.length > 0
            ? dataClasses.map((data, index) => (
                <Card
                  key={index}
                  thumbnail={data.thumbnail}
                  title={data.title}
                  link={data.link}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Classes
