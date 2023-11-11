// Next dependencies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Video1 from 'public/video_1.png'
import Ilustration1 from 'public/ilustration_10.png'
import Ilustration2 from 'public/ilustration_blue.png'

// Icons
import { AiTwotoneCalendar } from 'react-icons/ai'

function Card({ article }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-offset="-300"
      data-aos-delay="50"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="flex flex-row gap-5"
    >
      <div className="2xl:w-full h-fit 2xl:h-28 overflow-hidden rounded-lg">
        <Image
          src={article.thumbnail}
          alt="featured article"
          priority={false}
          quality={100}
          className="w-80"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Digital Marketing Offline Class</h3>
        <p className="text-sm font-medium">
          Turning my dream of working as a performance specialist into reality
          by starting to learn Digital Marketing Bootcamp!
        </p>
        <div className="flex flex-row items-center justify-between">
          <Link
            href=""
            alt="article link"
            className="self-start font-bold text-sm py-1 rounded-full"
          >
            See article
          </Link>
          <small className="flex flex-row items-center gap-2 font-medium text-sm">
            <AiTwotoneCalendar
              size="1.3em"
              color="#000000"
              className="fill-orange-1"
            />
            <span className="opacity-70">25 Sept 2024</span>
          </small>
        </div>
      </div>
    </article>
  )
}

function Article() {
  const dataArticle = [
    {
      title: 'Digital Marketing Offline Class',
      desc: 'Turning my dream of working as a performance specialist into reality by starting to learn Digital Marketing Bootcamp!',
      thumbnail: Video1,
      date: '25 Sept 2024',
    },
    {
      title: 'Digital Marketing Offline Class',
      desc: 'Turning my dream of working as a performance specialist into reality by starting to learn Digital Marketing Bootcamp!',
      thumbnail: Ilustration1,
      date: '25 Sept 2024',
    },
    {
      title: 'Digital Marketing Offline Class',
      desc: 'Turning my dream of working as a performance specialist into reality by starting to learn Digital Marketing Bootcamp!',
      thumbnail: Ilustration2,
      date: '25 Sept 2024',
    },
  ]
  return (
    <section className="container mt-32 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5">
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
          Featured Article
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
          Discover our engaging featured article, an expertly crafted, concise
          read on a captivating topic
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-14 xl:gap-10 py-10">
        <article
          data-aos="fade-up"
          data-aos-offset="-300"
          data-aos-delay="0"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="2xl:w-2/3 flex flex-col md:flex-row items-center gap-5 p-5 shadow-md rounded-lg"
        >
          <Image
            src={Video1}
            alt="featured article"
            priority={false}
            quality={100}
            className="h-48 2xl:h-64 w-auto rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <small className="flex flex-row items-center gap-2 font-medium text-sm">
              <AiTwotoneCalendar
                size="1.3em"
                color="#000000"
                className="fill-orange-1"
              />
              25 Sept 2024
            </small>
            <h3 className="font-bold text-2xl">
              Digital Marketing Offline Class
            </h3>
            <p className="text-base font-medium">
              Turning my dream of working as a performance specialist into
              reality by starting to learn Digital Marketing Bootcamp!
            </p>
            <Link
              href=""
              alt="article link"
              className="bg-blue-2 md:self-start font-bold text-center text-white py-2 px-4 rounded-full"
            >
              See article
            </Link>
          </div>
        </article>
        <div className="2xl:w-1/3 flex flex-col gap-6">
          {dataArticle.length > 0
            ? dataArticle.map((article, index) => (
                <Card key={index} article={article} />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Article
