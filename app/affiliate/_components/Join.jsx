import Image from 'next/image'
import Link from 'next/link'
import JoinBlue from 'public/join-blue.png'
import JoinOrange from 'public/join-orange.png'
import Ellipse from '../../leads/icons/ellipse-blue-yellow.png'

import { FaWhatsapp } from 'react-icons/fa6'

function Card({ data, index }) {
  return (
    <div className="xl:w-[483px] group relative flex flex-col items-center gap-8 bg-blue-1 first:bg-[#DDF2FF] last:bg-orange-1 first:text-black xl:odd:-translate-x-20 p-8 text-white font-semibold rounded-2xl shadow-lg">
      <div className="absolute w-10 h-10 left-5 top-3 flex justify-center items-center rounded-xl group-odd:bg-blue-1 group-even:bg-orange-1 text-white">
        {index + 1}
      </div>
      <Image
        src={data.thumbnail}
        alt="thumbnail join affiliate"
        quality={100}
        priority={false}
        className=""
      />
      <p className="text-center">{data.desc}</p>
    </div>
  )
}

function Join() {
  const dataJoin = [
    {
      thumbnail: JoinOrange,
      desc: 'Hubungi customer service kami.',
    },
    {
      thumbnail: JoinOrange,
      desc: 'Isi dan lengkapi formulir pendaftaran yang diberikan oleh customer service kami.',
    },
    {
      thumbnail: JoinBlue,
      desc: 'Kode voucher anda akan dikirimkan melalui email paling lambat 1 x 24 jam setelah submit formulir dan kode voucher pun siap digunakan.',
    },
  ]

  return (
    <section className="container flex flex-col-reverse xl:flex-row justify-evenly items-center gap-10 mt-28">
      <div className="flex flex-col gap-5">
        {dataJoin.length > 0
          ? dataJoin.map((join, index) => (
              <Card key={index} index={index} data={join} />
            ))
          : null}
      </div>
      <div className="xl:w-1/3 flex flex-col gap-7">
        <Image
          src={Ellipse}
          alt="ellipse"
          quality={100}
          priority={false}
          className="xl:w-fit w-10"
        />
        <h2 className="font-semibold text-4xl">
          Join Qarir Affiliate Program Now!
        </h2>
        <p className="font-semibold text-xl text-slate-500">
          Earn commissions and make millions by joining the Qarir affiliate
          program.
        </p>
        <Link
          href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
          target="_blank"
          alt="contact whatsapp"
          className="flex items-center gap-3 bg-blue-1 text-white p-2 px-6 self-start rounded-full"
        >
          <FaWhatsapp size="1.2em" color="#fff" /> Join now
        </Link>
      </div>
    </section>
  )
}

export default Join
