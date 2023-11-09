// Icons
import People from '../../components/icons/People'
import Lamp from '../../components/icons/Lamp'
import Book from '../../components/icons/Book'
import HandShake from '../../components/icons/HandShake'
import Globe from '../../components/icons/Globe'
import Stars from '../../components/icons/Stars'

// DUMMY DATA
const dataBenefit = [
  {
    title: 'Passionate Trainers',
    desc: 'All our trainers are well experienced experts with senior-director level practitioners.',
    icon: <People height="40" color="white" />,
  },
  {
    title: 'By Enrichment Program',
    desc: 'Join our enrichment program in form of internship (part-time) for several projects at corporates/leading startups.',
    icon: <Lamp height="40" color="white" />,
  },
  {
    title: 'Personalized Curriculum',
    desc: 'Our class is limited only for 7-15 and 15-35 students. For all beginners, they can join extra class sessions to accelerate their skills as they wish.',
    icon: <Book height="40" color="white" />,
  },
  {
    title: 'Hiring Partners Mentorship',
    desc: 'Get mentoring session with our hiring partners to learn more about company culture, industry update, and soft skill class.',
    icon: <HandShake height="40" color="white" />,
  },
  {
    title: 'International Destination',
    desc: 'You only need to bring your laptop & bag from your home country to find new opportunity, get networking access, learn new culture, and go further with our international bootcamp across the world.',
    icon: <Globe height="40" color="white" />,
  },
  {
    title: '5 Star Services',
    desc: 'This is where education meets hospitality. 24/7 services from our global team representative will respond to your needs.',
    icon: <Stars height="40" color="white" />,
  },
]

function Card({ title, desc, icon }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="-300"
      data-aos-delay="100"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="bg-white flex flex-col gap-5 justify-center items-center text-center shadow-md p-5 pb-24 rounded-md mt-20"
    >
      <div className="w-fit bg-gradient-to-t from-orange-2 to-orange-3 p-4 md:p-6 rounded-lg -mt-16">
        {icon}
      </div>
      <p className="font-bold text-xl lg:text-2xl">{title}</p>
      <p className="lg:text-base text-sm text-slate-500">{desc}</p>
    </div>
  )
}

function Benefit() {
  return (
    <section className="container flex flex-col mt-16">
      <div className="flex flex-col items-center gap-3 text-center py-6">
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
          Why Choose
          <br className="sm:hidden" />
          <span className="relative">
            <span className="relative z-10 sm:ml-2">QarirGenerator</span>
            <span className="h-3 w-24 xl:w-36 absolute right-0 bottom-0 lg:bottom-1 z-0 bg-orange-1"></span>
          </span>
          ?
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
          Qarirgenerator Has Been Proven To Produce Competent Graduates In The
          Industry Through The Bootcamp Program.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {dataBenefit.length > 0
          ? dataBenefit.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                desc={benefit.desc}
                icon={benefit.icon}
              />
            ))
          : null}
      </div>
    </section>
  )
}

export default Benefit
