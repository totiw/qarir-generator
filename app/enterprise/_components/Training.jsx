// Next dependencies
import Image from 'next/image'

// Assets
import Training1 from 'public/enterprise_ilustration_card_1.png'
import Training2 from 'public/enterprise_ilustration_card_2.png'

// Icons
import { FaCircleCheck } from 'react-icons/fa6'

function Card({ title, desc, thumbnail }) {
  return (
    <div className="w-96 h-fit flex flex-col gap-3 border bg-white p-5 rounded-2xl">
      <Image src={thumbnail} alt="training" priority={false} quality={100} />
      <div className="flex flex-col gap-3 self-start">
        <p className="font-bold text-2xl text-left">{title}</p>
        <p className="text-left">{desc}</p>
      </div>
    </div>
  )
}

function Training() {
  const dataTraining = [
    {
      title:
        'Training for Agile & Scrum, Creative Design, Risk Management, or Hospitality.',
      desc: 'QarirGenerator is your #1 Ranked Career Accelerator',
      thumbnail: Training1,
    },
    {
      title: 'Training for Data & Tech',
      desc: 'Follow the tech transformation and be agile! Improve your team now!',
      thumbnail: Training2,
    },
  ]

  const dataTrainingBenefit = [
    'Personalised Curriculum',
    'More practical, More Fun',
    `World's Best Trainer`,
    `Post-Training Support`,
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
      className="container flex flex-col items-center gap-10 text-center py-6 mt-16"
    >
      <h2 className="font-black text-2xl lg:text-4xl">
        Train Your
        <span className="relative">
          <span className="relative z-10">Business Team</span>
          <span className="h-3 w-24 xl:w-36 absolute right-0 bottom-0 lg:bottom-1 z-0 bg-orange-1"></span>
        </span>
        ?
      </h2>
      <div className="flex flex-col lg:flex-row gap-5 md:z-10 xl:gap-20">
        {dataTrainingBenefit.length > 0 &&
          dataTrainingBenefit.map((training, index) => (
            <p
              key={index}
              className="flex items-center gap-2 font-medium text-base"
            >
              <FaCircleCheck size="1.2em" color="#2622B9" />
              {training}
            </p>
          ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {dataTraining.length > 0
          ? dataTraining.map((training, index) => (
              <Card
                key={index}
                title={training.title}
                desc={training.desc}
                thumbnail={training.thumbnail}
              />
            ))
          : null}
      </div>
    </section>
  )
}

export default Training
