// Next Dependncies
import Image from 'next/image'
import Link from 'next/link'

// Assets
import BannerImage from 'public/ilustration_blue.png'

function Banner() {
  return (
    <section className="flex flex-col justify-center gap-10 min-h-[80vh]">
      {/* Header */}
      <div className="container grow flex flex-col-reverse xl:flex-row xl:items-center">
        <div className="flex flex-col gap-10">
          <h1 className="inline-block xl:flex xl:flex-col xl:gap-5 font-black text-3xl xl:text-5xl leading-normal">
            <span>
              Data Science
              <span className="bg-blue-2 text-white p-1 px-2 mx-3 rounded-lg">
                Bootcamp
              </span>
              <br />
              <span className="text-blue-2">Indonesia</span>
            </span>
          </h1>
          <p className="text-slate-500 font-normal text-sm lg:text-2xl">
            Lebih dari belajar! Kerjakan proyek, dapatkan bimbingan bersama
            pakar, bertemu dengan pemimpin industri data, dan bersiaplah memulai
            karir menjadi data scientists!😎
          </p>
          <div className="flex flex-row items-center gap-5">
            <span className="bg-blue-3 font-bold text-sm text-blue-2 rounded-full py-3 px-4">
              Online - Hybrid
            </span>
            <span className="bg-blue-3 font-bold text-sm text-blue-2 rounded-full py-3 px-4">
              Beginner Friendly
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mt-4">
            <Link
              href="#programs"
              className="w-full lg:w-auto bg-blue-2 lg:px-10 lg:py-4 py-2 md:self-start rounded-full text-center text-white font-bold"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="#programs"
              className="w-full lg:w-auto outline outline-1 outline-blue-2 lg:px-10 lg:py-4 py-2 md:self-start rounded-full text-center text-blue-2 font-bold"
            >
              Download Syllabus
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src={BannerImage}
            quality={100}
            alt="banner image"
            priority
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
