import Image from 'next/image'

import needs from 'public/needs.png'
import curatedProfile from 'public/curatedprofile.png'
import list from 'public/shortlist.png'
import onboard from 'public/onboard.png'

function HiringSteps() {
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
      className="container flex flex-col gap-20 items-center mt-28"
    >
      <h1 className="text-[#101F50] flex flex-col gap-4 font-bold text-2xl text-center homepage section heading">
        Process of hiring
        <span>
          talents
          <span className="career-center hiringsteps-title px-4 py-2 m-2">
            Hiring Steps
          </span>
        </span>
      </h1>
      <div className="flex flex-row text-center gap-14">
        <div className="career-center hiringsteps-div">
          <Image src={needs} alt="hiring steps" className="p-4" />
          <h1 className="career-center title">Console your needs with us</h1>
          <p>
            Our Hire expert will recommend profile that suits with your need
          </p>
        </div>
        <div className="career-center hiringsteps-div">
          <Image src={curatedProfile} alt="hiring steps" className="p-4" />
          <h1 className="career-center title">Get your curated profile</h1>
          <p>We&apos;ll send you screened profile within 7 days</p>
        </div>
        <div className="career-center hiringsteps-div">
          <Image src={list} alt="hiring steps" className="p-4" />
          <h1 className="career-center title">Shortlist and Interview</h1>
          <p>Filter and choose the profile based on your preference</p>
        </div>
        <div className="career-center hiringsteps-div">
          <Image src={onboard} alt="hiring steps" className="p-4" />
          <h1 className="career-center title">Start and on board</h1>
          <p>Now you&apos;re ready to on board your candidate</p>
        </div>
      </div>
    </section>
  )
}

export default HiringSteps
