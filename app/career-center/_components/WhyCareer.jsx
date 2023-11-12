// Next Dependncies
import Image from 'next/image'

// Assets
import Training1 from 'public/whyCareer (1).png'
import Training2 from 'public/whyCareer (2).png'
import Training3 from 'public/whyCareer (3).png'
import Training4 from 'public/whyCareer (4).png'
import Training5 from 'public/whyCareer (5).png'

// Icons
import Why1 from './icons/Why1'
import Why2 from './icons/Why2'
import Why3 from './icons/Why3'
import Why4 from './icons/Why4'
import Why5 from './icons/Why5'

function Card({ index, title, desc, img, icon }) {
  return (
    <div
      className={`flex ${
        index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'
      } p-5 w-9/12 justify-center items-center gap-40`}
    >
      <div className="before:absolute before:w-96 before:h-96 before:z-0 before:-translate-x-5 before:translate-y-5 before:border-4 before:border-[#101F50]">
        <Image
          className="relative z-10 w-96 h-96"
          src={img}
          alt="training"
          priority={false}
          quality={100}
        />
      </div>
      <div className="flex flex-col gap-3 self-start mt-3">
        <p className="w-96 text-[#101F50] font-bold text-2xl text-left">
          {icon}
          {title}
        </p>
        <p className="w-96 text-left">{desc}</p>
      </div>
    </div>
  )
}

function WhyCareer() {
  const whyCareerData = [
    {
      title: 'Skillful candidate with good attitude for your company',
      desc: "We believe that success is not just about skills it's also about attitude. That's why we recommend candidates who not only excel in their skills but also exhibit a positive and adaptable attitude.",
      img: Training5,
      icon: <Why4 />,
    },
    {
      title: 'No budget to acquire our talents',
      desc: "Say goodbye to budget constraints. With our service, you can acquire top talents without the recruitment costs. We help you save resources while boosting your team's capabilities.",
      img: Training4,
      icon: <Why3 />,
    },
    {
      title: 'Dedicated recruiters support',
      desc: "Our dedicated team of recruiters is your strategic partner in talent acquisition. They work tirelessly to understand your unique needs and provide you with recommendations that align with your company's culture and objectives.",
      img: Training3,
      icon: <Why2 />,
    },
    {
      title: '3 - 5 recommendation candidate in 7 days',
      desc: "Time is of the essence in today's competitive landscape. We understand that urgency. Our service is designed to deliver 3 to 5 candidate recommendations within just 7 days.",
      img: Training2,
      icon: <Why1 />,
    },
    {
      title: 'Candidate beyond our database',
      desc: 'While our extensive database is a treasure trove of talent, we go the extra mile. Our reach extends far beyond our database; we tap into a vast network to identify candidates who perfectly match your requirements.',
      img: Training1,
      icon: <Why5 />,
    },
  ]
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="-300"
      data-aos-delay="0"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="container min-h-[80vh] px-10 pb-10"
    >
      <div className="flex flex-col">
        <div className="bg-[#1D476D] p-3 lg:pl-10 px-5 self-start text-white font-semibold lg:text-2xl text-right rounded-r-full rounded-bl-full">
          QarirTalents
        </div>
        <h1 className="font-bold my-5 -tracking-normal text-2xl">
          How Are We Different
        </h1>
      </div>
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        {whyCareerData.length > 0
          ? whyCareerData.map((careerData, index) => (
              <Card
                key={index}
                index={index}
                title={careerData.title}
                desc={careerData.desc}
                img={careerData.img}
                icon={careerData.icon}
              />
            ))
          : null}
      </div>
    </section>
  )
}

export default WhyCareer
