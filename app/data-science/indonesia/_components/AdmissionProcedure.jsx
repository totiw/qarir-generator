import { MdAppSettingsAlt } from 'react-icons/md'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'
import { IoMdChatbubbles } from 'react-icons/io'
import HandShake from '@/components/icons/HandShake'

function Card({ data }) {
  return (
    <div className="bg-white flex flex-col lg:flex-row items-center gap-3 p-8 rounded-lg shadow-sm">
      <span>{data.icon}</span>
      <p className="font-medium text-sm text-center lg:text-left lg:text-base text-slate-500">
        {data.desc}
      </p>
    </div>
  )
}

function AdmissionProcedure() {
  const dataRingkasan = [
    {
      icon: <MdAppSettingsAlt size="48px" color="#2622B9" />,
      desc: 'Kelas bootcamp Indonesia kami sangat fleksibel, Anda dapat memilih antara kelas Hybrid dan kelas online untuk bergabung! Di mana pun Anda tinggal!',
    },
    {
      icon: <BsFillPersonVcardFill size="48px" color="#2622B9" />,
      desc: 'Sebagai salah satu ekonomi terbesar di Asia Tenggara, Indonesia mengubah semua sektor menjadi digital dengan cepat. Menjadi Tech atau Digital Talent di Indonesia memberi Anda peluang besar untuk mendapatkan pekerjaan dan proyek bergaji tinggi!',
    },
    {
      icon: <TbReportAnalytics size="48px" color="#2622B9" />,
      desc: 'Kendala bahasa inggris? Semua kelas dilakukan dalam Bahasa Indonesia, Damn We love Indonesia !',
    },
    {
      icon: <IoMdChatbubbles size="48px" color="#2622B9" />,
      desc: 'Kendala bahasa inggris? Semua kelas dilakukan dalam Bahasa Indonesia, Damn We love Indonesia !',
    },
    {
      icon: <HandShake height="48px" color="#2622B9" />,
      desc: 'Kendala bahasa inggris? Semua kelas dilakukan dalam Bahasa Indonesia, Damn We love Indonesia !',
    },
  ]
  return (
    <section id="admission-procedure" className="flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">ADMISSION PROCEDURE</p>
      <h2 className="font-black text-2xl lg:text-4xl">Follow the procedure</h2>
      <div className="flex flex-col gap-5">
        {dataRingkasan.length > 0
          ? dataRingkasan.map((ringkasan, index) => (
              <Card key={index} data={ringkasan} />
            ))
          : null}
      </div>
    </section>
  )
}

export default AdmissionProcedure
