// Next Dependncies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import BannerImage from 'public/ilustration_enterprise.png'
import Training1 from 'public/whyCareer (1).png'
import Training2 from 'public/whyCareer (2).png'
import Training3 from 'public/whyCareer (3).png'
import Training4 from 'public/whyCareer (4).png'
import Training5 from 'public/whyCareer (5).png'

// Icons
import { MdThumbUp } from 'react-icons/md'

function Card({ title, desc, img }) {
    return (
      <div className="flex flex-row p-5 w-9/12">
        <Image className='w-64 h-64 mr-10' src={img} alt="training" priority={false} quality={100} />
        <div className="flex flex-col gap-3 self-start">
          <p className="text-[#101F50] font-bold text-2xl text-left">{title}</p>
          <p className="text-left">{desc}</p>
        </div>
      </div>
    )
  }

function WhyCareer() {
const whyCareerData = [
    {
        title:'Skillful candidate with good attitude for your company',
        desc: "We believe that success is not just about skills it's also about attitude. That's why we recommend candidates who not only excel in their skills but also exhibit a positive and adaptable attitude.",
        img: Training1,
    },
    {
        title: 'No budget to acquire our talents',
        desc: "Say goodbye to budget constraints. With our service, you can acquire top talents without the recruitment costs. We help you save resources while boosting your team's capabilities.",
        img: Training2,
    },
    {
        title: 'Dedicated recruiters support',
        desc: "Our dedicated team of recruiters is your strategic partner in talent acquisition. They work tirelessly to understand your unique needs and provide you with recommendations that align with your company's culture and objectives.",
        img: Training3,
    },
    {
        title: '3 - 5 recommendation candidate in 7 days',
        desc: "Time is of the essence in today's competitive landscape. We understand that urgency. Our service is designed to deliver 3 to 5 candidate recommendations within just 7 days.",
        img: Training4,
    },
    {
        title: 'Candidate beyond our database',
        desc: "While our extensive database is a treasure trove of talent, we go the extra mile. Our reach extends far beyond our database; we tap into a vast network to identify candidates who perfectly match your requirements.",
        img: Training5,
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
    className="in-h-[80vh] px-10 pb-10">
      <div className='flex flex-col'>
        <h1 className='bg-[#1D476D] py-2 text-white w-1/12 rounded-tr-lg rounded-br-lg rounded-bl-lg'>QarirTalents</h1>
        <h1 className='font-bold my-5 -tracking-normal text-2xl'>How Are We Different</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {whyCareerData.length > 0
          ? whyCareerData.map((careerData, index) => (
              <Card
                key={index}
                title={careerData.title}
                desc={careerData.desc}
                img={careerData.img}
              />
            ))
          : null}
      </div>
    </section>
  )
}

export default WhyCareer
