// Dependencies
import Image from 'next/image'

//
import Building from '@/components/icons/Building'
import Location from '@/components/icons/Location'
import World from '@/components/icons/World'

function Card({ data }) {
  return (
    <div className="bg-white flex flex-row items-center gap-3 p-8 rounded-lg shadow-sm">
      <span>{data.icon}</span>
      <p className="font-medium text-sm lg:text-base text-slate-500">
        {data.desc}
      </p>
    </div>
  )
}

function Ringkasan() {
  const dataRingkasan = [
    {
      icon: <Building className="w-12 h-12" />,
      desc: 'Kelas bootcamp Indonesia kami sangat fleksibel, Anda dapat memilih antara kelas Hybrid dan kelas online untuk bergabung! Di mana pun Anda tinggal!',
    },
    {
      icon: <Location className="w-12 h-12" />,
      desc: 'Sebagai salah satu ekonomi terbesar di Asia Tenggara, Indonesia mengubah semua sektor menjadi digital dengan cepat. Menjadi Tech atau Digital Talent di Indonesia memberi Anda peluang besar untuk mendapatkan pekerjaan dan proyek bergaji tinggi!',
    },
    {
      icon: <World className="w-12 h-12" />,
      desc: 'Kendala bahasa inggris? Semua kelas dilakukan dalam Bahasa Indonesia, Damn We love Indonesia !',
    },
  ]
  return (
    <section id="ringkasan" className="flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">RINGKASAN</p>
      <h2 className="font-black text-2xl lg:text-4xl">
        Kenapa Anda harus belajar di Indonesia?
      </h2>
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

export default Ringkasan
