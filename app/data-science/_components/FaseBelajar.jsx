import Accordion from '@/components/Accordion'
import Checklist from '@/components/icons/Checklist'

function FaseBelajar() {
  const dataFaseBelajar = [
    {
      title: 'Persiapan',
      desc: 'QarirGenerator menyediakan persiapan karir. Segera setelah Anda diterima, Anda akan mendapatkan jadwal tetap pemetaan karir & kelas soft skill dengan pelatih kami yang bersemangat. Anda juga akan menerima sekitar 10-20 jam sumber belajar online, yang dikuratori dengan cermat oleh Pakar QarirGenerator agar intuitif dan interaktif. Fase persiapan ini akan memastikan Anda memiliki fondasi yang diperlukan dalam Python sebelum bootcamp dimulai.',
      icon: <Checklist />,
      moduleCount: 0,
    },
    {
      title: 'Data Analysis',
      desc: 'Kuasai penggunaan bahasa pemrograman Python, khususnya untuk aplikasi ilmu data, yang memerlukan kemahiran dalam mengekstraksi data dari basis data relasional, menangani kumpulan data yang luas, dan menghasilkan visualisasi data. Selain itu, dapatkan pemahaman menyeluruh tentang prinsip matematika dasar, seperti statistik dan aljabar linier, untuk memfasilitasi analisis data yang efisien (modul terbaru 2023).',
      icon: <Checklist />,
      moduleCount: 1,
    },
    {
      title: 'Decision Science',
      desc: 'Bayangkan menjadi konsultan data dan menguasai seni menavigasi melalui fase persiapan data dari kumpulan data yang sangat besar. Manfaatkan keahlian Anda dalam menafsirkan hasil statistik yang diperoleh dari berbagai alat seperti model regresi multivariat, pengujian hipotesis, dan interval kepercayaan untuk mengekstrak wawasan yang berharga.',
      icon: <Checklist />,
      moduleCount: 2,
    },
    {
      title: 'Machine Learning',
      desc: 'Jalankan Machine learning, yang melibatkan persiapan data, rekayasa fitur, pemilihan model, evaluasi, dan penyempurnaan. Kembangkan pemahaman tentang prinsip-prinsip matematika dan implementasi numerik dari model Machine Learning.',
      icon: <Checklist />,
      moduleCount: 3,
    },
    {
      title: 'Deep Learning',
      desc: 'Temukan rahasia Deep Learning! Pelajari tentang struktur dan komponen jaringan neural, buat jaringan Anda sendiri untuk memproses gambar, urutan, dan teks, terapkan model yang telah dilatih sebelumnya melalui pembelajaran transfer, dan praktikkan dengan pembuat enkode otomatis, pemrosesan batch, dan pelatihan GPU.',
      icon: <Checklist />,
      moduleCount: 4,
    },
    {
      title: 'Machine Learning Engineering',
      desc: 'Convert your superior handmade models into a Python package for cloud-based replication and training with virtual machines and online databases. Monitor and update performance with new data, and share predictions through APIs or websites (2023 newest module) Ubah model karya Anda yang unggul menjadi paket Python untuk replikasi dan pelatihan berbasis cloud dengan mesin virtual dan database online. Pantau dan perbarui kinerja dengan data baru, dan bagikan prediksi melalui API atau situs web.* (Modul Terbaru 2023)',
      icon: <Checklist />,
      moduleCount: 5,
    },
  ]
  return (
    <section className="flex flex-col gap-5">
      <p className="font-bold text-base text-slate-500">FASE BELAJAR</p>
      <h2 className="font-black text-2xl lg:text-4xl">
        Apa yang Akan Anda Pelajari dalam Praktek
      </h2>
      <p className="font-normal text-base text-slate-500">
        Setiap mata pelajaran akan mengharuskan Anda untuk menerapkan apa yang
        Anda pelajari dengan pengalaman langsung melalui tugas praktis dan umpan
        balik langsung dari instruktur Anda. Di dalam rinci, Anda akan belajar:
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
        {dataFaseBelajar.length > 0
          ? dataFaseBelajar.map((fase, index) => (
              <Accordion key={index} data={fase} />
            ))
          : nul}
      </div>
    </section>
  )
}

export default FaseBelajar
