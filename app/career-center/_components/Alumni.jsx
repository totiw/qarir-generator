// Next dependencies
import Image from 'next/image'

// Assets
import Person1 from '../../../public/hieronymus_kopong_bali.jpeg'
import Person2 from '../../../public/tyas_fitri_anggarinii.jpeg'
import Person3 from '../../../public/angeline_lie.jpeg'
import Person4 from '../../../public/balad_al_barokah.jpeg'
import Person5 from '../../../public/andhimas_iben_d.jpeg'
import Person6 from '../../../public/agnes_friska_cyntia_puspitasari.jpeg'

// Icons
import { FaLinkedinIn } from 'react-icons/fa6'
import Link from 'next/link'

// DUMMY DATA
const dataAlumni = [
  {
    name: 'Hieronymus Kopong Bali',
    role: 'Marketing Manager at KUMPUL | Digital Marketing & Startup Practitioner | BNSP Certified',
    desc: `"Here, not only get to attend fun classes, but I also improve my networking and knowledge because of the highly experienced trainer." - Hieronymus`,
    thumbnail: Person1,
  },
  {
    name: 'Tyas Fitri Anggarini',
    role: 'Brand Performance & Strategy at majoo Indonesia',
    desc: `"Turning my dream of working as a performance specialist into reality by starting to learn Digital Marketing Bootcamp!" - Tyas`,
    thumbnail: Person2,
  },
  {
    name: 'Angeline Lie',
    role: 'Founder & CEO at Digmo Agency',
    desc: `"The learning materials are very comprehensive, the classes are well-structured, and the consultation service is satisfying." - Angeline Lie`,
    thumbnail: Person3,
  },
  {
    name: 'Balad Al Barokah',
    role: 'Growth Analyst at MGD Digital Marketing Consultant',
    desc: `"QarirGenerator opens up a new opportunity to work in the digital field!" -Balad`,
    thumbnail: Person4,
  },
  {
    name: 'Andimas Iben D.',
    role: 'Msc. Marketing Candidate at RuG | Ex - Tokopedia | LPDP Awardee PK-194',
    desc: `"QarirGenerator helped me to gain a deeper understanding of data science. After taking their course and staying connected with my mentor, I was able to start working at my dream company using the significantly improved skills." - Andimas Iben`,
    thumbnail: Person5,
  },
  {
    name: 'Agnes Friska Cyntia Puspitasari',
    role: 'Co-Founder di PT Visuels Inspirasi Digispora | Digital Marketing Expert | Instagram & Tiktok Content Creator',
    desc: `"High Quality Program with the best mentors. Their services meet 5 stars" - Agnes Friska`,
    thumbnail: Person6,
  },
]

function Card({ name, role, desc, thumbnail }) {
  return (
    <div
      data-aos="fade"
      data-aos-offset="-300"
      data-aos-delay="0"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="bg-white flex flex-col justify-between gap-5 p-10 border rounded-lg h-auto lg:h-96 w-96 lg:w-auto"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-10">
          <Image
            src={thumbnail}
            alt="alumni thumbnail"
            priority={false}
            quality={100}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-medium text-base text-black">{name}</h3>
            <p className="font-medium text-xs text-slate-500">{role}</p>
          </div>
        </div>
        <p className="font-medium text-base">{desc}</p>
      </div>
      <Link
        href=""
        className="capitalize bg-[#101F50] text-white flex flex-row justify-center items-center gap-2 p-2 rounded-lg"
      >
        <span className="bg-white rounded-full p-2">
          <FaLinkedinIn size="1.3em" color="#101F50" />
        </span>
        view linkedin
      </Link>
    </div>
  )
}

function Alumni() {
  return (
    <section className="container mt-32 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="text-xl text-[#101F50] font-semibold">
          Alumni
          <span className="bg-orange-1 p-1 px-2 ml-2 text-white rounded-lg">
            Profile
          </span>
        </p>
        <h2 className="font-bold text-[#101F50] text-2xl lg:text-4xl w-full">
          Discover our <span className="text-orange-1">alumni profile</span> and
          their works!
        </h2>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-row lg:grid lg:grid-cols-3 gap-5 w-fit">
          {dataAlumni.length > 0
            ? dataAlumni.map((alumni, index) => (
                <Card
                  key={index}
                  name={alumni.name}
                  role={alumni.role}
                  desc={alumni.desc}
                  thumbnail={alumni.thumbnail}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Alumni
