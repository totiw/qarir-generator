// NExt dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Video1 from '../../public/video_1.png'
import Video2 from '../../public/video_2.png'
import Video3 from '../../public/video_3.png'

// Icons
import { FaPlayCircle } from 'react-icons/fa'
import Quote from '../../components/icons/Quote'

// DUMMY DATA
const dataClasses = [
  {
    thumbnail: Video1,
    title: 'Digital Marketing Offline Class',
    link: 'https://youtu.be/FPZxdd4fZ_k',
  },
  {
    thumbnail: Video2,
    title: 'What They Say? Student QnA',
    link: 'https://youtu.be/GRLniV4UJPY',
  },
  {
    thumbnail: Video3,
    title: 'QnA With Trainer Digital for Newbie',
    link: 'https://youtu.be/YX0ncJCCurk',
  },
]

function Card({ thumbnail, title, link }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="-300"
      data-aos-delay="0"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="bg-white p-6 flex flex-col items-center gap-10 rounded-lg shadow-md"
    >
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
      <div className="bg-blue-1 relative text-white flex flex-col py-20 pb-56 z-0">
        <div className="container flex flex-col items-center gap-8 text-center">
          <span className="absolute right-6 top-6 w-14 lg:w-20">
            <Quote height="auto" color="#FF9500" />
          </span>
          <span className="absolute bottom-28 lg:bottom-6 left-6 w-14 lg:w-20 rotate-180">
            <Quote height="auto" color="#FF9500" />
          </span>
          <h2
            data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="0"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="homepage section heading"
          >
            Connect and Collaborate! <br />
            Enrich your potential with QarirGenerator
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="homepage section desc"
          >
            QarirGenerator helps you land your dream job. Our career managers
            guide you at the end of your bootcamp with 7.1 NPS Score (Highest in
            Education Field)
          </p>
          <div
            data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="0"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="flex flex-col lg:flex-row gap-24 py-10"
          >
            <div className="basis-1/4 classes-stats">
              <span>3.000+</span>
              <span>Alumni</span>
            </div>
            <div className="basis-2/4 classes-stats">
              <span>91%</span>
              <span>Alumni Get a Job Less Than 12 Months</span>
            </div>
            <div className="basis-1/4 classes-stats">
              <span>100+</span>
              <span> Valuable Partnership</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative container flex flex-col items-center gap-10 -mt-40 z-10">
        <h2
          data-aos="fade-up"
          data-aos-offset="-300"
          data-aos-delay="0"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="text-2xl lg:text-4xl font-black text-white"
        >
          See Our Classes
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
