// Dependencies
import Image from 'next/image'

// Asssets
import Portfolio1 from 'public/portfolio1.png'
import Portfolio2 from 'public/portfolio2.png'
import Portfolio3 from 'public/portfolio3.png'
import Person1 from '../../../public/hieronymus_kopong_bali.jpeg'
import Person2 from '../../../public/tyas_fitri_anggarinii.jpeg'
import Person3 from '../../../public/angeline_lie.jpeg'
import Link from 'next/link'

function Card({ data }) {
  return (
    <div className="w-80 flex flex-col gap-2 rounded-lg overflow-hidden border-2">
      <Image
        src={data.thumbnail}
        alt="thumbnail portfolio"
        quality={100}
        priority={false}
        width={100}
        height={100}
        className="w-full"
      />
      <div className="p-3 flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <p className="text-orange-1 font-bold">{data.name}</p>
          <div className="flex flex-row gap-2">
            <Image
              src={data.icon}
              alt="icon alumni"
              quality={100}
              priority={false}
              width={100}
              height={100}
              className="w-5 h-5 rounded-full"
            />
            <p className="text-xs">{data.person}</p>
          </div>
        </div>
        <p className="font-bold text-xl">{data.title}</p>
        <Link
          href=""
          alt="join live session"
          className="bg-[#101F50] text-center text-white p-2 rounded-lg capitalize"
        >
          join live session
        </Link>
      </div>
    </div>
  )
}

function Portfolio() {
  const dataPortfolio = [
    {
      name: 'Digital Marketing',
      title:
        'Ini Merupakan Judul Portofolio dalam website bootcamp Digital Marketing',
      thumbnail: Portfolio1,
      icon: Person1,
      person: 'Hieronymus',
    },
    {
      name: 'Data Science',
      title:
        'Ini Merupakan Judul Portofolio dalam website bootcamp Data Science',
      thumbnail: Portfolio2,
      icon: Person2,
      person: 'Tyas',
    },
    {
      name: 'UI/UX Designer',
      title:
        'Ini Merupakan Judul Portofolio dalam website bootcamp UI/UX Designer',
      thumbnail: Portfolio3,
      icon: Person3,
      person: 'Angeline',
    },
  ]
  return (
    <section className="container flex flex-col gap-10 mt-28">
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-black text-4xl text-orange-1">Talent Portfolio</h2>
        <p className="bg-[#0D3860] p-2 px-4 text-2xl lg:text-4xl font-bold text-white rounded-full">
          Our Talent
        </p>
        <p className="text-sm mt-2 md:w-3/5 text-center">
          Welcome to our Talent Showcase. Explore our portfolio of remarkable
          individuals as they demonstrate their prowess and innovation through
          captivating presentations
        </p>
      </div>
      <div className="flex flex-row justify-center gap-5 mt-5">
        {dataPortfolio.length > 0
          ? dataPortfolio.map((portfolio, index) => (
              <Card key={index} data={portfolio} />
            ))
          : null}
      </div>
    </section>
  )
}

export default Portfolio
