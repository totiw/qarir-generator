// Next Dependncies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import BannerImage from 'public/career-centerheader.png'

// Icons

function Banner() {
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
    className="flex flex-col justify-center items-center min-h-[80vh] mt-20 pb-10 xl:p-0">
      <div>
        <div className='flex items-center'>
          <h1 className='inline-block xl:flex xl:flex-col xl:gap-4 -tracking-normal font-black text-4xl xl:text-5xl leading-normal text-center'>
            <span>
              Get
              <span className="career-center banner-title m-4">
                Best Talent
              </span> 
              With
            </span>
            Zero Effort!
          </h1>
        </div>
      </div>
      <div className="xl:w-7/12 flex flex-col m-10 text-center">
        <h3>You dont like headhunters? Cause we dont either! Look no further than QarirGenerator, your ultimate partner in the world of career acceleration.</h3>
        <Image src={BannerImage} className='py-5'/> 
        <Link href="#"
        className="bg-[#1D476D] py-3 px-8 md:self-center rounded-full text-center text-white m-10 font-bold"
        >
        Meet Our Team
      </Link>
      </div>
    </section>
  )
}

export default Banner
