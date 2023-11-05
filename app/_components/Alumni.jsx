// Next dependencies
import Image from 'next/image'

// Assets
import Person1 from '../../public/hieronymus_kopong_bali.jpeg'
import Person2 from '../../public/tyas_fitri_anggarinii.jpeg'
import Person3 from '../../public/angeline_lie.jpeg'
import Person4 from '../../public/balad_al_barokah.jpeg'
import Person5 from '../../public/andhimas_iben_d.jpeg'
import Person6 from '../../public/agnes_friska_cyntia_puspitasari.jpeg'

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
    <div className="bg-white flex flex-col gap-5 p-10 shadow-sm rounded-lg h-80 w-96 lg:w-auto">
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
  )
}

function Alumni() {
  return (
    <section className="container mt-32 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5">
        <h2 className="homepage section heading">Alumni Success Story</h2>
        <p className="homepage section desc">
          Our main focus is to provide the best learning experience for
          students, here are some testimonials from our alumni
        </p>
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
